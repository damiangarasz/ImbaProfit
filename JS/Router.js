const Router = {
  init: () => {
    document.querySelectorAll('.menu-button').forEach((button) => {
      button.addEventListener('click', (event) => {
        const url = event.target.value;
        Router.go(url);
      });
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });

    window.addEventListener('popstate', (event) => {
      Router.go(event.state.path, false);
    });

    Router.go(location.pathname);
  },
  go: function go(path, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }

    let pageElement = null;
    //history.pushState({ path }, null, path);
    switch (path) {
      case './blog.html':
        window.location.href = '/blog.html';

        return;
      case '/strategy/':
        document.querySelector('.content').innerHTML = '';
        pageElement = document.createElement('strategy-page');
        document.querySelector('.content').appendChild(pageElement);
        return;
      case '/charts/':
        document.querySelector('.content').innerHTML = '';
        pageElement = document.createElement('charts-page');
        document.querySelector('.content').appendChild(pageElement);

        return;
      case '/socials/':
        return;
      case '/contact/':
        return;
    }
  },
};

export default Router;
