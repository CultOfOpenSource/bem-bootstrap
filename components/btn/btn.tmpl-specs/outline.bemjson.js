([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ].map(function (modParam) {
        var mod = {};
        mod['outline'] = modParam;
        return {
            block: 'btn', 
            mods: mod,
            type: 'button',
            tag: 'button',
            content: modParam
        }
    })
);
