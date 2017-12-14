([
    {
        content: ['dark', ].map(function(modName) {
            var mod = {};
            mod[modName] = true;
            return {
                block: 'card',
                mix: [{
                    "block": 'bg-' + modName,
                }, {
                    "block": 'text-white',
                }, ],
                content: [{
                    elem: 'img',
                    attrs: {
                        alt: "foo",
                        src: '...',
                    },
                }, {
                    elem: 'img-overlay',
                    content: [{
                        elem: 'title',
                        content: 'Title',
                    }, {
                        elem: 'text',
                        content: "Text",
                    }, {
                        elem: 'text',
                        content: "Text",
                    }, ],
                }, ],
            }
        })
},
]);
