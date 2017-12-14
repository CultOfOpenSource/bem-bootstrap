block('bd_title')(
    tag()('h1'));
block('bd-lead')(
        tag()('p'));
block('card-title')(
    tag()('h4'));
block('card-text')(
    tag()('p'));
block('anchorjs-link')(
    tag()('a'),
    attrs()(function() {
    return { href: this.ctx.url, "aria-label": 'Anchor', "data-anchorjs-icon": '#', style: 'padding-left: 0.375em;',};
        })
    );
block('code').mods()({ highlighter: 'rouge' });
block('btn')(
    tag()('a'),
    attrs()(function() {
        return { href: this.ctx.url };
    })
);
block('nav')(
    tag()('ul'));
    block('nav-item')(
        tag()('li'));
        block('nav-link')(
            tag()('a'),
            attrs()(function() {
                return { href: this.ctx.url };
            })
        );
block('card-img')(tag()('img'));
block('card-subtitle')(
    tag()('h6'));
block('card-link')(
    tag()('a'),
    attrs()(function() {
        return { href: this.ctx.url };
    })
);
block('list-group')(
    tag()('ul'));
block('list-group-item')(
    tag()('li'));
block('blockquote')(
    tag()('blockquote'));
block('blockquote-footer')(
    tag()('footer'));
block('text-muted')(
    tag()('small'));
block('nc')(
    tag()('span'));
block('p')(
    tag()('span'));
block('nl')(
    tag()('span'));
block('k')(
    tag()('span'));
block('nd')(
    tag()('span'));
block('n')(
    tag()('span'));
block('m')(
    tag()('span'));
