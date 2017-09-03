const nodeConfigSetup = require('bem-bootstrap');
const isProd = process.env.YENV === 'production';
const levels = [
    { path: 'node_modules/bem-bootstrap/components', check: false },
    'components'
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
