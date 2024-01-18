const Router = {
    init: () => {

        console.log('jestem init');
        document.querySelectorAll('a.nav-link')
        .forEach( link => {
            link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.href;
            Router.go(url);
            });
            

        })
        Router.go(location.pathname);

    },
    go: function go(path, addToHistory = true) {

        history.pushState({path}, null, path);
        
        let pageElement = null;

        switch (path) {
            case '/home':
                return;
            case '/videos':
                return;
            case '/blog':
                return;
            case '/strategy':
                return;
            case '/charts':
                return;
            case '/socials':
                return;
            case '/contact':
                return;
       }
    }
}

export default Router;