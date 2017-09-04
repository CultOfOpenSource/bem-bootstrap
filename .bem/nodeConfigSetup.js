const techs = require('./techs');
const coreLevels = [
    { path: 'node_modules/bem-core/common.blocks', check: false },
    { path: 'node_modules/bem-core/desktop.blocks', check: false },
];

/**
 *
 * @param {Array} levels
 * @param {boolean} isProd
 * @param {object} naming
 * @returns Array
 */
module.exports = function (levels, isProd, naming) {

    if (typeof isProd === "undefined") {
        isProd = process.env.YENV === 'production';
    }

    if (typeof naming === "undefined") {
        naming = {
            elem: '-',
            mod: '-'
        };
    }

    levels = coreLevels.concat(levels);

    return [
        // essential
        [techs.bem.levels, { levels: levels }],
        [techs.fileProvider, { target: '?.bemjson.js' }],
        [techs.bem.bemjsonToBemdecl],
        [techs.bem.deps],
        [techs.bem.files],

        // essential bemjson
        [techs.fileProvider, { target: '?.src.html' }],
        [techs.htmlToBemjson, {
            target: '?.tmp.bemjson.js',
            htmlFile: '?.src.html',
            opts: {
                naming: naming
            }
        }],

        // css
        [techs.postcss, {
            target: '?.css',
            plugins: techs.postcssPlugins
        }],

        // bemtree
        // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

        // bemhtml
        [techs.bemhtml, {
            sourceSuffixes: ['bemhtml', 'bemhtml.js'],
            forceBaseTemplates: false,
            engineOptions: {
                naming: naming,
                escapeContent: false,
                elemJsInstances: false
            }
        }],

        // html
        [techs.bemjsonToHtml],

        // client bemhtml
        [techs.bem.depsByTechToBemdecl, {
            target: '?.bemhtml.bemdecl.js',
            sourceTech: 'js',
            destTech: 'bemhtml'
        }],
        [techs.bem.deps, {
            target: '?.bemhtml.deps.js',
            bemdeclFile: '?.bemhtml.bemdecl.js'
        }],
        [techs.bem.files, {
            depsFile: '?.bemhtml.deps.js',
            filesTarget: '?.bemhtml.files',
            dirsTarget: '?.bemhtml.dirs'
        }],
        [techs.bemhtml, {
            target: '?.browser.bemhtml.js',
            filesTarget: '?.bemhtml.files',
            sourceSuffixes: ['bemhtml', 'bemhtml.js'],
            forceBaseTemplates: false,
            engineOptions: {
                naming: naming,
                elemJsInstances: false
            }
        }],

        // js
        [techs.browserJs, {
            target: '?.js',
            includeYM: false
        }],

        // optimize
        [techs.optimize, { source: '?.js', target: '?.min.js', minify: isProd }],
        [techs.optimize, { source: '?.css', target: '?.min.css', minify: isProd }]
    ]
};
