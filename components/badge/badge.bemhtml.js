block('badge')(
    tag()('span'),
    match(function () {
        return this.ctx.url;
    })(
        tag()('a'),
        attrs()(function () {
            return {
                href: this.ctx.url
            }
        })
    )
);
