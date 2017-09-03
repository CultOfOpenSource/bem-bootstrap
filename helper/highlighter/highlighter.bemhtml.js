block('highlighter')(
    tag()('pre'),
    //js()(true),
    content()(function () {
        var ctx = this.ctx;
        var content = JSON.stringify(ctx.code, null, ' ');
        return [
            {
                tag : 'code',
                cls : 'language-json',
                content : content
            }
        ]
    })
);
