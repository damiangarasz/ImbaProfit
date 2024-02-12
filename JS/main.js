import Router from "./Router.js";

//Link web components
import { Charts } from "../charts/Charts.js";

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});
