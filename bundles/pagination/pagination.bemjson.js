module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'pagination.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'pagination.min.js' }],
    content: [
        {
            block: 'container',
            mods: {
                fluid: true
            },
            content: [
                {
                    block: 'main',
                    content: [
                        {
                            tag: 'h1',
                            content: 'Pagination'
                        },
                        {
                            block: 'example',
                            content: {
                                block: 'pagination',
                                pages: [
                                    { link: '#', name: 'Previous' },
                                    { link: '#', name: '1' },
                                    { link: '#', name: '2' },
                                    { link: '#', name: '3' },
                                    { link: '#', name: 'Next' }
                                ]
                            }
                        },
                    ]
                }
            ]
        }
    ]
};
