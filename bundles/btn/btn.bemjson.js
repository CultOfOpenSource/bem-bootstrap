module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'btn.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'btn.min.js' }],
    content: [
        {
            block: 'container',
            mods: {
                fluid: true
            },
            content: [{
                block: 'main',
                content: [
                {
                    tag: 'h1',
                    content: 'Buttons'
                },
                {
                    tag: 'p',
                    content: 'Use Bootstraps custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'
                },
                {
                    tag: 'h2',
                    content: 'Examples'
                },
                {
                    tag: 'p',
                    content: 'Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control'
                },
                {
                    block: 'bd-example',
                    content: [
                        { 
                            block: 'example',
                            content: [
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
                        }
                    ]
                },
                {
                    tag: 'h2',
                    content: 'Button tags'
                },
                {
                    tag: 'p',
                    content: 'The <code>.btn</code> classes are designed to be used with the <code>button</code> element. However, you can also use these classes on <code>a</code> or <code>input</code> elements (though some browsers may apply a slightly different rendering).'
                },
                {
                    block: 'example',
                    content: [
                        { 
                            block: 'btn', 
                            tag: 'a',
                            mods: {primary: true},
                            content: 'link',
                        },
                        {
                            block: 'btn', 
                            tag: 'button',
                            mods: {primary: true},
                            content: 'button',
                            type:'submit',
                        },
                        { 
                            block: 'btn', 
                            tag: 'input',
                            mods: {primary: true},
                            type: 'button',
                            value: 'input'
                        },
                        { 
                            block: 'btn', 
                            tag: 'input',
                            mods: {primary: true},
                            type: 'submit',
                            value: 'submit'
                        },
                        { 
                            block: 'btn', 
                            tag: 'input',
                            mods: {primary: true},
                            type: 'reset',
                            value: 'reset'
                        }
                    ]
                },
                {
                    tag: 'h2',
                    content: 'Outline buttons'
                },
                {
                    tag: 'p',
                    content: 'In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.'
                },
                { 
                    block: 'example',
                    content: [
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
                },
                {
                    tag: 'h2',
                    content: 'Sizes'
                },
                {
                    tag: 'p',
                    content: 'Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.'
                },
                { 
                    block: 'example',
                    content: [
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
                    })
                },
                { 
                    block: 'example',
                    content: [
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
                    })
                },
                {
                    tag: 'p',
                    content: 'Create block level buttons—those that span the full width of a parent—by adding <code>.btn-block</code>.'
                },
                { 
                    block: 'example',
                    content: [
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
                },
                {
                    tag: 'h2',
                    content: 'Active state'
                },
                {
                    tag: 'p',
                    content: 'Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. <b>There’s no need to add a class to <code>button</code>s as they use a pseudo-class.</b> However, you can still force the same active appearance with <code>.active</code> (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.'
                },
                { 
                    block: 'example',
                    content: [
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
                            content: modName + ' link'
                        }
                    })
                },
                {
                    tag: 'h2',
                    content: 'Disabled state'
                },
                {
                    tag: 'p',
                    content: 'Make buttons look inactive by adding the <code>disabled</code> boolean attribute to any <code>button</code> element.'
                },
                { 
                    block: 'example',
                    content: [
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
                    })
                },
                {
                    tag: 'p',
                    content: 'Disabled buttons using the <code>a</code> element behave a bit different'
                },
                {
                    tag: 'ul',
                    content: [
                        {
                            tag: 'li',
                            content: '<code>a</code>s don’t support the <code>disabled</code> attribute, so you must add the <code>.disabled</code> class to make it visually appear disabled.'
                        },
                        {
                            tag: 'li',
                            content: 'Some future-friendly styles are included to disable all <code>pointer-events</code> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.'
                        },
                        {
                            tag: 'li',
                            content: 'Disabled buttons should include the <code>aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies.'
                        },
                    ]
                },
                { 
                    block: 'example',
                    content: [
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
                            content: modName + ' link'
                        }
                    })
                },
                {
                    tag: 'h2',
                    content: 'Button plugin'
                },
                {
                    tag: 'p',
                    content: 'Do more with buttons. Control button states or create groups of buttons for more components like toolbars.'
                },
                {
                    tag: 'h3',
                    content: 'Toggle states'
                },
                {
                    tag: 'p',
                    content: 'Add <code>data-toggle="button"</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must manually add the <code>.active</code> class and <code>aria-pressed="true"</code> to the <code>button</code>.'
                },
                {
                    block: 'example',
                    content: [
                        { 
                            block: 'btn', 
                            tag: 'button',
                            mods: {primary: true},
                            type: 'button',
                            toggle:'button',
                            content: 'Single toggle'
                        },
                    ]
                }
                ]
            }]
        }]  
};
