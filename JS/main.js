import Router from "./Router.js";

window.app = {};
app.router = Router;

window.addEventListener('DOMContentLoaded', async ()=> {
    app.router.init();
})