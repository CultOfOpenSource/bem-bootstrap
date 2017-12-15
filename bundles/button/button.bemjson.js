module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'alert.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'alert.min.js' }],
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
                            block: 'btn', 
                            mods: {primary: true},
                            content: 'Primary'
                        },
                    ]
                }
            ]
        }
    ]
};
