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
                            content: 'Alerts'
                        },
                        {
                            tag: 'p',
                            content: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
                        },
                        {
                            tag: 'h2',
                            content: 'Examples'
                        },
                        {
                            tag: 'p',
                            content: 'Alerts are available for any length of text, as well as an optional dismiss button.'
                        },
                        {
                            block: 'highlight'
                        },
                        {
                            block: 'example',
                            content: [
                                'primary',
                                'secondary',
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'light',
                                'dark',
                            ].map(function (modName) {
                                var mod = {};
                                mod[modName] = true;
                                return {
                                    block: 'alert',
                                    mods: mod,
                                    content: 'This is a ' + modName + ' alert—check it out!'
                                }
                            })
                        },
                        {
                            tag: 'h2',
                            content: 'Link color'
                        },
                        {
                            tag: 'p',
                            content: [
                                'Use the ',
                                {
                                    block: 'code',
                                    mods: {
                                        highlighter: 'rouge'
                                    },
                                    content: '.alert-link'
                                },
                                ' utility class to quickly provide matching colored links within any alert.',
                            ]
                        },
                        {
                            block: 'example',
                            content: [
                                'primary',
                                'secondary',
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'light',
                                'dark',
                            ].map(function (modName) {
                                var mod = {};
                                mod[modName] = true;
                                return {
                                    block: 'alert',
                                    mods: mod,
                                    content: [
                                        'This is a primary alert with ',
                                        {
                                            elem: 'link',
                                            url: '#',
                                            content: 'an example link.'
                                        },
                                        ' Give it a click if you like.',
                                    ]
                                }
                            })
                        },
                        {
                            tag: 'h2',
                            content: 'Dismissing'
                        },
                        {
                            block: 'example',
                            content: {
                                block: 'alert',
                                mods: {
                                    warning: true,
                                    dismissible: true,
                                },
                                content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.'
                            }
                        },
                    ]
                }
            ]
        }
    ]
};
