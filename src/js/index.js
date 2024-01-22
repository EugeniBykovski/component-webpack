import "bootstrap/dist/css/bootstrap.min.css";
import App from "../components/App";
import "../styles/css/main.min.css";

function Render({ root, app }) {
  this.render = () =>
    document.querySelector(root).insertAdjacentHTML("beforeend", app);
}

const root = new Render({
  root: "#app",
  app: App(),
});

root.render();
