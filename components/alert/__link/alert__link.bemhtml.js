block('alert').elem('link')(
    tag()('a'),
    attrs()(function() {
        var ctx = this.ctx,
            attrs = { role : 'link' },
            tabIndex;

        if(!this.mods.disabled) {
            if(ctx.url) {
                attrs.href = ctx.url;
                tabIndex = ctx.tabIndex;
            } else {
                tabIndex = ctx.tabIndex || 0;
            }
        } else {
            attrs['aria-disabled'] = 'true';
        }

        typeof tabIndex === 'undefined' || (attrs.tabindex = tabIndex);

        ctx.title && (attrs.title = ctx.title);
        ctx.target && (attrs.target = ctx.target);

        return attrs;
    })
);
