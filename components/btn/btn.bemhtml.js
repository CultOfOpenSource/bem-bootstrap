block('btn')(
    attrs()(function() {
        if(this.ctx.tag=='a'){
            if(this.ctx.mix=='disabled'){
                return {
                    role: 'button',
                    'aria-disabled': 'true',
                     href: this.ctx.url
                };
            } else if(this.ctx.mix=='active') {
                return {
                    role: 'button',
                    'aria-pressed':"true",
                     href: this.ctx.url
                };
            } else {
                return {
                    role: 'button',
                    href: this.ctx.url
                };
            }
        } else if(this.ctx.tag=='button'){
            if(this.ctx.toggle=='button')
            {
                return {
                    'data-toggle': this.ctx.toggle,
                    type: this.ctx.type,
                    'aria-pressed':'false',
                    'autocomplete':'off'
                };
            }
            return {
                type: this.ctx.type,
                value: this.ctx.value,
                disabled: this.ctx.disabled
            };
        }
    })
    );
    block('btn').match(function() {
            return this.ctx.type==='submit' && this.ctx.content==='button'
        })(
        tag()('button'),
        attrs()(function() {
               return {
                type: this.ctx.type
            };
        })
    );
    block('btn').match(function() {
            return this.ctx.type==='button' && this.ctx.value==='input' ||
            this.ctx.type==='submit' && this.ctx.value==='submit' ||
            this.ctx.type==='reset' && this.ctx.value==='reset'
        })(
        tag()('input'),
        attrs()(function() {
               return {
                value: this.ctx.value,
                type: this.ctx.type
            };
        })
    );
