var _ = require( 'lodash' );
var heroin = require("heroin-js");

var test = {
                name: 'test-nodejs-stp-book-inventory',
                collaborators: [ 'heroku@foynberge.com' ]
            };

var config = _.merge({},require('./base'),test);

console.log( config );

var configurator = heroin(process.env.HEROKU_API_TOKEN,{debug:false});

configurator( config );