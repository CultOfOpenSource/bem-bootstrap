([
    {
        content: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', ].map(function(modName) {
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
                    elem: 'header',
                    content: 'Header',
                }, {
                    elem: 'body',
                    mix: [{
                        "block": 'text-' + modName,
                    }, ],
                    content: [{
                        elem: 'title',
                        content: modName + ' card title',
                    }, {
                        elem: 'text',
                        content: "Text",
                    }, ],
                }, ],
            }
        })
    },
]);
