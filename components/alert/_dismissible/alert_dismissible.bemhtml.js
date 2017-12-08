block('alert').mod('dismissible', true)(
    mix()(function() {
        return [
            'fade',
            'show',
            applyNext()
        ]
    }),
    content()(function() {
        return  [
            {
                tag : 'button',
                cls : 'close',
                attrs : {
                    type : 'button',
                    role : 'button',
                    'data-dismiss' : 'alert',
                    'aria-label' : 'Close',
                },
                content : {
                    tag : 'span',
                    attrs : {
                        'aria-hidden' : 'true',
                    },
                    content : '&times;'
                }
            },
            applyNext()
        ];
    })
);
