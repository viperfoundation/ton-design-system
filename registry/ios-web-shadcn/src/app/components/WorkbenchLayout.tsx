import { Download, Menu, RefreshCcw, Smartphone } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { cn } from "./ui/utils";
import { downloadElementAsPng } from "../utils/downloadElementAsPng";

const DEFAULT_WIDTH = 430;
const DEFAULT_HEIGHT = 932;
const MIN_WIDTH = 280;
const MIN_HEIGHT = 480;
const STORAGE_KEY = "ios-web-shadcn-preview-size";

const DEVICE_PRESETS = [
  { label: "iPhone 14", width: 390, height: 844 },
  { label: "iPhone 15 Pro", width: 393, height: 852 },
  { label: "iPhone 16 Pro Max", width: 440, height: 956 },
  { label: "Custom base", width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT },
];

function getSafeDimension(value: string, fallback: number, min: number) {
  const parsedValue = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedValue) || parsedValue < min) {
    return fallback;
  }

  return parsedValue;
}

function getScreenshotFilename(pathname: string, width: number, height: number) {
  const pageName =
    pathname === "/"
      ? "messages"
      : pathname.replace(/^\//, "").replace(/[^a-z0-9-]+/gi, "-");

  return `ios-web-shadcn-${pageName}-${width}x${height}.png`;
}

export function WorkbenchLayout() {
  const location = useLocation();
  const previewRef = useRef<HTMLDivElement>(null);
  const [widthInput, setWidthInput] = useState(String(DEFAULT_WIDTH));
  const [heightInput, setHeightInput] = useState(String(DEFAULT_HEIGHT));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const savedSize = window.localStorage.getItem(STORAGE_KEY);

    if (!savedSize) {
      return;
    }

    try {
      const parsedSize = JSON.parse(savedSize) as {
        height?: string;
        width?: string;
      };

      if (parsedSize.width) {
        setWidthInput(parsedSize.width);
      }

      if (parsedSize.height) {
        setHeightInput(parsedSize.height);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ height: heightInput, width: widthInput }),
    );
  }, [heightInput, widthInput]);

  const previewWidth = useMemo(
    () => getSafeDimension(widthInput, DEFAULT_WIDTH, MIN_WIDTH),
    [widthInput],
  );
  const previewHeight = useMemo(
    () => getSafeDimension(heightInput, DEFAULT_HEIGHT, MIN_HEIGHT),
    [heightInput],
  );

  async function handleScreenshot() {
    const previewElement = previewRef.current;

    if (!previewElement || isCapturing) {
      return;
    }

    setIsCapturing(true);
    setStatusMessage(null);

    try {
      await downloadElementAsPng(previewElement, {
        filename: getScreenshotFilename(
          location.pathname,
          previewWidth,
          previewHeight,
        ),
        height: previewHeight,
        width: previewWidth,
      });

      setStatusMessage("Screenshot saved.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Screenshot failed.";
      setStatusMessage(message);
    } finally {
      setIsCapturing(false);
    }
  }

  function applyPreset(width: number, height: number) {
    setWidthInput(String(width));
    setHeightInput(String(height));
  }

  function resetPreviewSize() {
    applyPreset(DEFAULT_WIDTH, DEFAULT_HEIGHT);
  }

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <button
        type="button"
        aria-label="Toggle controls"
        onClick={() => setIsSidebarOpen((open) => !open)}
        className="fixed top-4 left-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close controls"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
        />
      )}

      <div className="flex min-h-screen">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 flex w-[320px] max-w-[85vw] flex-col border-r border-white/10 bg-[#11141C] shadow-2xl transition-transform md:static md:max-w-none md:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0A84FF]/15 text-[#0A84FF]">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Preview controls</p>
              <p className="text-xs text-white/50">Custom size + screenshot</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-5">
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-white/90">Canvas size</h2>
                <button
                  type="button"
                  onClick={resetPreviewSize}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  <RefreshCcw className="h-3.5 w-3.5" />
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="space-y-2">
                  <span className="text-xs text-white/60">Width</span>
                  <input
                    min={MIN_WIDTH}
                    step={1}
                    type="number"
                    value={widthInput}
                    onChange={(event) => setWidthInput(event.target.value)}
                    className="h-11 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-sm outline-none transition focus:border-[#0A84FF]"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs text-white/60">Height</span>
                  <input
                    min={MIN_HEIGHT}
                    step={1}
                    type="number"
                    value={heightInput}
                    onChange={(event) => setHeightInput(event.target.value)}
                    className="h-11 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-sm outline-none transition focus:border-[#0A84FF]"
                  />
                </label>
              </div>

              <p className="text-xs leading-relaxed text-white/45">
                Min size: {MIN_WIDTH}×{MIN_HEIGHT}. Current preview: {previewWidth}×{previewHeight}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-medium text-white/90">Presets</h2>
              <div className="grid gap-2">
                {DEVICE_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyPreset(preset.width, preset.height)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left transition hover:border-white/20 hover:bg-black/30"
                  >
                    <span className="text-sm text-white/80">{preset.label}</span>
                    <span className="text-xs text-white/50">
                      {preset.width}×{preset.height}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-medium text-white/90">Export</h2>
              <button
                type="button"
                onClick={handleScreenshot}
                disabled={isCapturing}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-[#0A84FF] px-4 text-sm font-medium text-white transition hover:bg-[#3295FF] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Download className="h-4 w-4" />
                {isCapturing ? "Rendering..." : "Make screenshot"}
              </button>
              <p className="text-xs leading-relaxed text-white/45">
                Saves the active screen as PNG with the chosen width and height.
              </p>
              {statusMessage && (
                <p className="text-xs text-white/65">{statusMessage}</p>
              )}
            </section>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 overflow-auto md:pl-0">
          <div className="flex min-h-screen w-full items-center justify-center p-6 pt-20 md:p-10">
            <div className="rounded-[2.25rem] border border-white/10 bg-[#161922] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="mb-3 flex justify-center">
                <div className="h-1.5 w-24 rounded-full bg-black/50" />
              </div>
              <div
                className="overflow-hidden rounded-[1.8rem] bg-black"
                style={{
                  height: `${previewHeight}px`,
                  width: `${previewWidth}px`,
                }}
              >
                <div ref={previewRef} className="h-full w-full overflow-hidden bg-black">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
