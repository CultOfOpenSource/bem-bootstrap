block('breadcrumb')(
    tag()('ol'),
    wrap()(function () {
        return {
            tag: 'nav',
            attrs: {
                'aria-label': 'breadcrumb',
                'role': 'navigation'
            },
            content: this.ctx
        };
    })
);
block('breadcrumb').elem('item')(
    tag()('li'),
    match(function () {
        return this.ctx.url;
    })(
        content()(function () {
            var ctx = this.ctx;
            return {
                tag: 'a',
                attrs: {
                    href: ctx.url
                },
                content: ctx.content
            }
        })
    ),
    match(function () {
        return !this.ctx.url;
    })(
        mix()('active'),
        attrs()({
            'aria-current': 'page'
        })
    )
);
