block('card').elem('title')(
    tag()('h4'));
block('card').elem('text')(
    tag()('p'));
block('card').elem('img')(tag()('img'));
block('card').elem('subtitle')(
    tag()('h6'));
block('card').elem('link')(
    tag()('a'),
    attrs()(function() {
        return { href: this.ctx.url };
    })
);
