module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'container',
            mods: {
                fluid: true
            },
            content: [
                {
                    block: 'alert',
                    mods: {
                        warning: true,
                        dismissible: true,
                    },
                    mix: [
                        'fade',
                        'show',
                    ],
                    content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.'
                },
                {
                    block: 'alert',
                    mods: {
                        success: true,
                    },
                    content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.'
                }
            ]
        }
    ]
};
