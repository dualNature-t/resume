import RootRouter from "./Route";
import { createRoot } from "react-dom/client";
import "./global.scss"

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <RootRouter></RootRouter>
);