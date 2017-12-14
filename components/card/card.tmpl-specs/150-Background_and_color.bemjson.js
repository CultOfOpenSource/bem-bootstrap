([
    {
        content: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', ].map(function(modName) {
            var mod = {};
            mod[modName] = true;
            return {
                block: 'card',
                mix: [{
                    "block": 'bg-' + modName,
                },
                {
                    "block": 'text-white',
                }, {
                    "block": 'mb-3',
                }, ],
                content: [{
                    elem: 'header',
                    content: 'Header',
                }, {
                    elem: 'body',
                    content: [{
                        elem: 'title',
                        content: modName + ' card title',
                    }, {
                        elem: 'text',
                        content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    }, ],
                }, ],
            }
        })
    },
]);
