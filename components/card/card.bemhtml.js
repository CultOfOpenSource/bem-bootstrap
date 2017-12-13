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
block('card-img-bottom')(
    tag()('img'),
    attrs()({
        alt: "Card image cap",
        src: 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"318"%20height%3D"180"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20318%20180"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_16046a7e3d8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_16046a7e3d8"><rect%20width%3D"318"%20height%3D"180"%20fill%3D"%23777"><%2Frect><g><text%20x%3D"109.1328125"%20y%3D"97.2">Image%20cap<%2Ftext><%2Fg><%2Fg><%2Fsvg>',
        }));
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
