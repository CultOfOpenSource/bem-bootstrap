# BEM with Bootstrap <img src="http://getbootstrap.com/assets/img/bootstrap-stack.png" alt="Bootstrap Logo" width="90" height="90" align="right"> <img src="https://cdn.worldvectorlogo.com/logos/bem-2.svg" alt="BEM Logo" width="90" height="90" align="right">

## Usage

    npm i -D bem-bootstrap
    
Add `.bem/enb-make.js`:

```javascript
const nodeConfigSetup = require('bem-bootstrap');
const isProd = process.env.YENV === 'production';
const levels = [
    { path: 'node_modules/bem-bootstrap/components', check: false }
];

module.exports = function (config) {

    config.nodes('bundles/*', function (nodeConfig) {
        nodeConfig.addTechs(nodeConfigSetup(levels, isProd));

        nodeConfig.addTargets([
            '?.html',
            '?.min.js',
            '?.min.css'
        ]);
    });
};

```

Add `bundles/index/index.bemjson.js`:

```javascript
module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'container',
            mods: {
                fluid: true
            },
            content: [
                {
                    block: 'alert',
                    mods: {
                        success: true,
                        dismissible: true
                    },
                    content: '<strong>Holy guacamole!</strong> You should check in on some of those fields below.'
                }
            ]
        }
    ]
};
```

    npm start


## Docs

- [Static page quick-start](https://en.bem.info/platform/tutorials/quick-start-static/)
- [Starting your own BEM project](https://en.bem.info/platform/tutorials/start-with-project-stub/)
- [Tutorial for BEMJSON template-engine](https://en.bem.info/platform/bemjson/)
- [Tutorial on BEMHTML](https://en.bem.info/platform/bem-xjst/)
- [Tutorial on i-bem.js](https://en.bem.info/platform/tutorials/i-bem/)

## Videos

- [BEM - Building 'em modular](https://www.youtube.com/watch?v=huQp7gr3WPE)
- [BEM for JavaScript Talk on Camp JS](https://en.bem.info/talks/campjs-melbourne-2014/)
