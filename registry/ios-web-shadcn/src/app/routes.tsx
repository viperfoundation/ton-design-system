import { createBrowserRouter } from "react-router";
import { ConversationList } from "./components/ConversationList";
import { ChatView } from "./components/ChatView";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
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
]);