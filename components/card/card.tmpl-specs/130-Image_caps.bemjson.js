([
    {
        "block": "card",
        "content": [{
            elem: 'img',
            elemMods: {top: true},
            attrs: {
                alt: "foo",
                src: '...',
        },
        }, {
            "elem": "body",
            "content": [{
                "elem": "title",
                "content": "Title"
            }, {
                "elem": "text",
                "content": "Text"
            }, {
                "elem": "text",
                    "content": "Text"
            }]
        }]
    }, {
        "block": "card",
        "content": [{
            "elem": "body",
            "content": [{
                "elem": "title",
                "content": "Title"
            }, {
                "elem": "text",
                "content": "Text"
            }, {
                "elem": "text",
                    "content": "Text"
            }]
        }, {
            elem: 'img',
            elemMods: {bottom: true},
            attrs: {
                alt: "foo",
                src: '...',
        },
        }, ]
    },
]);
