const nodeConfigSetup = require('./nodeConfigSetup');
const isProd = process.env.YENV === 'production';
const levels = [
    'helper',
    'components'
];

module.exports = function (config) {

    config.nodes('bundles/*', function (nodeConfig) {
        nodeConfig.addTechs(nodeConfigSetup(levels, isProd));

        nodeConfig.addTargets([
            // '?.bemtree.js',
            //'?.tmp.bemjson.js',
            '?.html',
            '?.min.js',
            '?.min.css'
        ]);
    });
};
