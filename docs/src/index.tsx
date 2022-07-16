import main from "../../src";
import "./index.css";

const root = document.createElement("div");

root.id = "root";

root.innerHTML = main.name;

document.body.appendChild(root);
