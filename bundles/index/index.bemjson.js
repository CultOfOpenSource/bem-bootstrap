module.exports = {
    block: 'page',
    title: 'Alerts · Bootstrap',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' } },
        { elem: 'css', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css' },
        { elem: 'css', url: '/bundles/demo/demo.min.css' }
    ],
    scripts: [
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
        { elem: 'js', url: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js' },
        { elem: 'js', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js' },
        { elem: 'js', url: '/bundles/demo/demo.min.js' }
    ],
    content: [
        {
            tag: 'ul',
            content: [
                {
                    tag: 'li',
                    content: {
                        tag: 'a',
                        attrs: {
                            href: '../alert/alert.html'
                        },
                        content: 'alert'
                    }
                },
                {
                    tag: 'li',
                    content: {
                        tag: 'a',
                        attrs: {
                            href: '../breadcrumb/breadcrumb.html'
                        },
                        content: 'breadcrumb'
                    }
                }
            ]
        }
    ]
};
