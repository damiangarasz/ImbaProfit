const Router = {
  init: () => {
    document.querySelectorAll(".menu-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const url = event.target.value;
        Router.go(url);
      });
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    window.addEventListener("popstate", (event) => {
      Router.go(event.state.path, false);
    });

    Router.go(window.location.pathname);
  },
  go: function go(path, addToHistory = true) {
    // if (addToHistory) {
    //   history.pushState({}, null, path);
    // }

    let pageElement = null;

    switch (path) {
      case "./blog.html":
        history.pushState({path}, null, "../Blog/blog.html");
        window.location.href = "../Blog/blog.html";
       
        return;
      case "/strategy/":
        return;
      case "/charts/":
        history.pushState({path}, null, path);
        document.querySelector(".content").innerHTML = "";
        pageElement = document.createElement("charts-page");
        document.querySelector(".content").appendChild(pageElement);
        
        return;
      case "/socials/":
        return;
      case "/contact/":
        return;
    }
  },
};

export default Router;
