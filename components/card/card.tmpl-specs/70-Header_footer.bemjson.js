([
    {
        block: 'card',
        content: [{
            elem: 'header',
            content: 'Header',
        }, {
            elem: 'body',
            content: [{
                elem: 'title',
                content: 'Title',
            }, {
                elem: 'text',
                content: 'Text',
            },],
        }]
    },
    {
        block: 'card',
        content: [{
            elem: 'header',
            tag: 'h4',
            content: 'Header',
        }, {
            elem: 'body',
            content: [{
                elem: 'title',
                content: 'Title',
            }, {
                elem: 'text',
                content: 'Text',
            }, ],
        }]
    },
    {
        block: 'card',
        content: [{
            elem: 'header',
            content: 'Header',
        }, {
            elem: 'body',
            content: [{
                block: 'blockquote',
                mix: 'mb-0',
                content: [{
                    tag: 'p',
                    content: 'Text',
                }, {
                    block: 'blockquote-footer',
                    content: [{
                        "html": "Text "
                    }, {
                        "tag": "cite",
                        "attrs": {
                            "title": "title"
                        },
                        "content": "Text"
                    }]
                }, ]
            }, ],
        }]
    },
    {
        block: 'card',
        mix: 'text-center',
        content: [{
            elem: 'header',
            content: 'Header',
        }, {
            elem: 'body',
            content: [{
                elem: 'title',
                content: 'Title',
            }, {
                elem: 'text',
                content: 'Text',
            },],
        }, {
            elem: 'footer',
            mix: 'text-muted',
            content: 'Footer',
        }, ]
    }
]);
