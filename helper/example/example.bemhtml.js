block('example')(
    tag()('dev'),
    content()(function () {
        var ctx = this.ctx;
        return [
            applyNext(),
            {
                block : 'highlighter',
                code : ctx.content
            }
        ]
    })
);
