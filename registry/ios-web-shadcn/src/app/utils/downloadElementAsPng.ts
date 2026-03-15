const SVG_XMLNS = "http://www.w3.org/2000/svg";
const XHTML_XMLNS = "http://www.w3.org/1999/xhtml";

type DownloadElementAsPngOptions = {
  filename: string;
  height: number;
  pixelRatio?: number;
  width: number;
};

function copyComputedStyles(sourceElement: Element, targetElement: Element) {
  if (
    !(targetElement instanceof HTMLElement) &&
    !(targetElement instanceof SVGElement)
  ) {
    return;
  }

  const computedStyle = window.getComputedStyle(sourceElement);

  for (const propertyName of Array.from(computedStyle)) {
    targetElement.style.setProperty(
      propertyName,
      computedStyle.getPropertyValue(propertyName),
      computedStyle.getPropertyPriority(propertyName),
    );
  }
}

function syncFormState(sourceElement: Element, targetElement: Element) {
  if (
    sourceElement instanceof HTMLInputElement &&
    targetElement instanceof HTMLInputElement
  ) {
    targetElement.value = sourceElement.value;
    targetElement.checked = sourceElement.checked;

    if (sourceElement.value) {
      targetElement.setAttribute("value", sourceElement.value);
    }

    if (sourceElement.checked) {
      targetElement.setAttribute("checked", "");
    } else {
      targetElement.removeAttribute("checked");
    }

    return;
  }

  if (
    sourceElement instanceof HTMLTextAreaElement &&
    targetElement instanceof HTMLTextAreaElement
  ) {
    targetElement.value = sourceElement.value;
    targetElement.textContent = sourceElement.value;
    return;
  }

  if (
    sourceElement instanceof HTMLSelectElement &&
    targetElement instanceof HTMLSelectElement
  ) {
    targetElement.value = sourceElement.value;
  }
}

function syncCanvas(sourceElement: Element, targetElement: Element) {
  if (
    !(sourceElement instanceof HTMLCanvasElement) ||
    !(targetElement instanceof HTMLCanvasElement)
  ) {
    return;
  }

  const context = targetElement.getContext("2d");

  targetElement.width = sourceElement.width;
  targetElement.height = sourceElement.height;

  context?.drawImage(sourceElement, 0, 0);
}

function prepareClone(sourceNode: Element, targetNode: Element) {
  copyComputedStyles(sourceNode, targetNode);
  syncFormState(sourceNode, targetNode);
  syncCanvas(sourceNode, targetNode);

  if (sourceNode instanceof HTMLElement && targetNode instanceof HTMLElement) {
    targetNode.scrollTop = sourceNode.scrollTop;
    targetNode.scrollLeft = sourceNode.scrollLeft;
  }

  const sourceChildren = Array.from(sourceNode.children);
  const targetChildren = Array.from(targetNode.children);

  for (const [index, sourceChild] of sourceChildren.entries()) {
    const targetChild = targetChildren[index];

    if (!targetChild) {
      continue;
    }

    prepareClone(sourceChild, targetChild);
  }
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load screenshot SVG."));
    image.src = source;
  });
}

function createSvgDataUrl(element: HTMLElement, width: number, height: number) {
  const clonedElement = element.cloneNode(true) as HTMLElement;

  prepareClone(element, clonedElement);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("xmlns", XHTML_XMLNS);
  wrapper.style.width = `${width}px`;
  wrapper.style.height = `${height}px`;
  wrapper.style.overflow = "hidden";
  wrapper.appendChild(clonedElement);

  const serializedNode = new XMLSerializer().serializeToString(wrapper);
  const svg = `
    <svg xmlns="${SVG_XMLNS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <foreignObject width="100%" height="100%">${serializedNode}</foreignObject>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export async function downloadElementAsPng(
  element: HTMLElement,
  {
    filename,
    height,
    pixelRatio = Math.max(window.devicePixelRatio || 1, 2),
    width,
  }: DownloadElementAsPngOptions,
) {
  await document.fonts.ready;

  const svgDataUrl = createSvgDataUrl(element, width, height);
  const image = await loadImage(svgDataUrl);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas context is not available.");
  }

  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);

  context.scale(pixelRatio, pixelRatio);
  context.drawImage(image, 0, 0, width, height);

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/png");
  });

  if (!blob) {
    throw new Error("Failed to render PNG blob.");
  }

  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = filename;
  link.click();

  window.setTimeout(() => {
    URL.revokeObjectURL(downloadUrl);
  }, 0);
}
