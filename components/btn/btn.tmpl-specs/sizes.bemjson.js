([[
    'primary',
    'secondary',
    ].map(function (modName) {
    var mod = {};
    mod[modName] = true;
    mod['lg'] = true;
    return {
        block: 'btn', 
        mods: mod,
        type: 'button',
        tag: 'button',
        content: 'Large button'
    }
    }),
    [
        'primary',
        'secondary',
    ].map(function (modName) {
        var mod = {};
        mod[modName] = true;
        mod['sm'] = true;
        return {
            block: 'btn', 
            mods: mod,
            type: 'button',
            tag: 'button',
            content: 'Small button'
        }
    }),
    [
        'primary',
        'secondary',
    ].map(function (modName) {
        var mod = {};
        mod[modName] = true;
        mod['lg'] = true;
        mod['block'] = true;
        return {
            block: 'btn', 
            mods: mod,
            type: 'button',
            tag: 'button',
            content: 'Block level button'
        }
    })
]);
