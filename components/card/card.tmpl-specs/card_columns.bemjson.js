([
{
            "block": "card-columns",
            "content": [{
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
                    }]
                }]
            }, {
                "block": "card",
            }, {
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
                "mix": [{
                    "block": "bg-primary"
                }, {
                    "block": "text-white"
                }, {
                    "block": "text-center"
                },],
            }, {
                "block": "card",
                "mix": [{
                    "block": "text-center"
                }],
                "content": [{
                    "block": "card-body",
                    "content": [{
                        "block": "card-title",
                        "content": "Title"
                    }, {
                        "block": "card-text",
                        "content": "Text"
                    }, {
                        "block": "card-text",
                            "content": "Text"
                    }]
                }]
            }, {
                "block": "card",
                "content": [{
                    elem: 'img',
                    elemMods: {top: true},
                    attrs: {
                        alt: "foo",
                        src: '...',
                    },
                }]
            }, {
                "block": "card",
                "mix": [ {
                    "block": "text-right"
                }],
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
                }]
            }, ]
        }
]);
