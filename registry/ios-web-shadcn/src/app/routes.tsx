import { createBrowserRouter } from "react-router";
import { ConversationList } from "./components/ConversationList";
import { ChatView } from "./components/ChatView";
import { Profile } from "./components/Profile";
import { WorkbenchLayout } from "./components/WorkbenchLayout";

export const router = createBrowserRouter([
  {
    Component: WorkbenchLayout,
    children: [
      {
        path: "/",
        Component: ConversationList,
      },
      {
        path: "/chat/:id",
        Component: ChatView,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);
