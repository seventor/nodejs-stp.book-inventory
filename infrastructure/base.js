var baseConfig = {
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_x4k3dlv1:1e7mnuogodlnvf2aiavskc0mur@ds047955.mongolab.com:47955/heroku_x4k3dlv1' },
    collaborators: [ 'heroku@foynberge.com', 'thomas.ermesjo@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: []
};

module.exports = baseConfig;