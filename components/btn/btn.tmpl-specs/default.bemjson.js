([
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'link'
    ].map(function (modName) {
            var mod = {};
            mod[modName] = true;
            return {
                block: 'btn',
                tag: 'button',
                type:'button',
                mods: mod,
                content: modName
            }
        })
);
