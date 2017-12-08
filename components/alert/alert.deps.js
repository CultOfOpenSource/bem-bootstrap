({
    mustDeps: [
        'bootstrap',
        'util'
    ]
},
{
    tech: 'tmpl-spec.js',
    shouldDeps: [
        { tech: 'bemhtml', elem: 'link' },
        { tech: 'bemhtml', block : 'alert', mods : { dismissible : true } },
    ]
})
