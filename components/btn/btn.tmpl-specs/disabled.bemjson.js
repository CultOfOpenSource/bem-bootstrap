([
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
        type: 'button',
        disabled : true,
        tag: 'button',
        content: modName + ' button'
    }
}),
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
        mix: 'disabled',
        tag: 'a',
        url: '#',
        content: modName + ' link'
    }
})
]);
