module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
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
