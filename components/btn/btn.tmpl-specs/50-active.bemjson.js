(   
    [
    'primary',
    'secondary',
    ].map(function (modName) {
        var mod = {};
        mod[modName] = true;
        mod['lg'] = true;
        return {
            block: 'btn', 
            mods: mod,
            mix: 'active',
            tag: 'a',
            url: '#',
            content: modName + ' link'
        }
    })
);
