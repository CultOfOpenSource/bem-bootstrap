module.exports = {
    bem: require('enb-bem-techs'),
    // essential
    fileProvider: require('enb/techs/file-provider'),
    fileMerge: require('enb/techs/file-merge'),
    htmlToBemjson: require('enb-html-to-bemjson/techs/html-to-bemjson'),

    // optimization
    optimize: require('enb-borschik/techs/borschik'),

    // css
    postcss: require('enb-postcss/techs/enb-postcss'),
    postcssPlugins: [
        require('postcss-cssnext')()
    ],

    // js
    browserJs: require('enb-js/techs/browser-js'),

    // bemtree
    // bemtree: require('enb-bemxjst/techs/bemtree'),

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml'),
    bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
};
