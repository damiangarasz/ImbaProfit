import Router from "./Router.js";


//Link web components
import { Charts } from "../charts/Charts.js";
import { Strategy } from "../strategy/strategy.js";

window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});
