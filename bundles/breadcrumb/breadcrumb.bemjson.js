module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'breadcrumb.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'breadcrumb.min.js' }],
    content: [
        {
            block: 'breadcrumb',
            content: 'test'
        }
    ]
};
