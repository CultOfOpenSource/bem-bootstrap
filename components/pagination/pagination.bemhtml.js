block('pagination')(
    content().match(function () { return this.ctx.pages; })(function () {
        return this.ctx.pages.map(function (page) {
            return {
                cls: 'page-item',
                tag: 'li',
                content: {
                    cls: 'page-link',
                    tag: 'a',
                    attrs: {
                        href: page.link
                    },
                    content: page.name
                }
            }
        });
    }),

    match(function () { return this.ctx.size; }).mods()(function () {
        var mods = {};
        mods[this.ctx.size] = true;
        return this.extend(applyNext(), mods);
    }),

    tag()('ul')
);
