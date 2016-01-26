var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

/*
configurator.export('nodejs-stp-book-inventory').then(function(result) {

    console.log(result);
});
*/

configurator({ name: 'test-nodejs-stp-book-inventory',
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
        log_drains: [],
        domains: [ 'test-nodejs-stp-book-inventory.herokuapp.com' ] }
);
