import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FlashcardLearning } from "./components/FlashcardLearning";
import { ModeSelection } from "./components/ModeSelection";
import { Stats } from "./components/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "mode", Component: ModeSelection },
      { path: "flashcard", Component: FlashcardLearning },
      { path: "stats", Component: Stats },
    ],
  },
]);
