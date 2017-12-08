const nodeConfigSetup = require('./nodeConfigSetup');
const isProd = process.env.YENV === 'production';
const naming = {
    elem: '-',
    mod: '-'
};
const levels = [
    'helper',
    'components'
];

module.exports = function (config) {

    config.nodes('bundles/*', function (nodeConfig) {
        nodeConfig.addTechs(nodeConfigSetup(levels, isProd, naming));

        nodeConfig.addTargets([
            // '?.bemtree.js',
            //'?.tmp.bemjson.js',
            '?.html',
            '?.min.js',
            '?.min.css'
        ]);
    });
};
