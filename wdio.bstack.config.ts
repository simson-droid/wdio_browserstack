import { config } from "./wdio.conf";
var _=require('lodash')

var override={
    user:'simsonts_0aycxT' || process.env.BROWSERSTACK_USERNAME,
    key:'fzCHw2YS7yRPdEzB6Fzy' || process.env.BROWSERSTACK_ACCESS_KEY,
    capabilities:[
        
        {
            browserName: 'Chrome',
            'bstack:options': {
            os: 'Windows',
            osVersion: '11',
            browserVersion: '114.0'
            }
        }
        ],
              commonCapabilities: {
                'bstack:options': {
                  buildName: 'browserstack-build-1'
                }
              },
            services:[['browserstack',{browserstackLocal:true}]],
    

}
exports.config=_.defaultsDeep(override,config)
