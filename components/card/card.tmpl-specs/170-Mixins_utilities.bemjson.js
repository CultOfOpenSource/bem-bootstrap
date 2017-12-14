([
    {
        content: ['success', ].map(function(modName) {
            var mod = {};
            mod[modName] = true;
            return {
                block: 'card',
                mix: [{
                    "block": 'border-' + modName,
                }, {
                    "block": 'mb-3',
                }, ],
                content: [{
                    block: 'card-header',
                    content: 'Header',
                    mix: [{
                        "block": 'bg-transparent',
                    }, {
                        "block": 'border-' + modName,
                    }, ],
                }, {
                    block: 'card-body',
                    mix: [{
                        "block": 'text-' + modName,
                    }, ],
                    content: [{
                        block: 'card-title',
                        content: modName + ' card title',
                    }, {
                        block: 'card-text',
                        content: "Text",
                    }, ],
                }, {
                    block: 'card-footer',
                    content: 'Footer',
                    mix: [{
                        "block": 'bg-transparent',
                    }, {
                        "block": 'border-' + modName,
                    }, ],
                }, ],
            }
        })
    },
]);
