([
    {
        block: 'card',
        mix: 'text-center',
        content: [{
            elem: 'header',
            content: [{
                block: 'nav',
                mix: [{
                    elem: 'tabs'
                }, {
                    block: 'card-header-tabs',
                }],
                content: [{
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Active',
                        mix: 'active',
                    },
                }, {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Link',
                    },
                }, {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Disabled',
                        mix: 'disabled',
                    },
                }, ],
            }],
        }, {
            elem: 'body',
            content: [{
                elem: 'title',
                content: 'Title'
            }, {
                elem: 'text',
                content: "Text"
            },],
        }, ]
    },
    {
        block: 'card',
        mix: 'text-center',
        content: [{
            elem: 'header',
            content: [{
                block: 'nav',
                mix: [{
                    elem: 'pills'
                }, {
                    block: 'card-header-pills',
                }],
                content: [{
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Active',
                        mix: 'active',
                    },
                }, {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Link',
                    },
                }, {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        url: '#',
                        content: 'Disabled',
                        mix: 'disabled',
                    },
                }, ],
            }],
        }, {
            elem: 'body',
            content: [{
                elem: 'title',
                content: 'Title'
            }, {
                elem: 'text',
                content: "Text"
            },],
        }, ]
    },
]);
