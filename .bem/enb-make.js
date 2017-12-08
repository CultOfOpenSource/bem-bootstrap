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

    config.includeConfig('enb-bem-tmpl-specs');
    var examples = config.module('enb-bem-tmpl-specs') // Создаём конфигуратор сетов
        .createConfigurator('tmpl-specs', {            // в рамках таска `specs`.
            coverage: {                                // Определяем общие опции для всех уровней-сетов.
                engines: ['bemhtml'],
                reportDirectory: 'coverage',
                exclude: [
                    '**/node_modules/**'
                ],
                reporters: [
                    'text',
                    'lcov'
                ]
            }
        });

    examples.configure({
        destPath: 'components.tmpl-specs',
        levels: levels,
        engines: {
            'bemhtml': {
                tech: 'enb-bemxjst/techs/bemhtml',
                options: {
                    sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                    forceBaseTemplates: false,
                    engineOptions: {
                        naming: naming,
                        escapeContent: false,
                        elemJsInstances: false
                    }
                }
            }
        }
    });

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
