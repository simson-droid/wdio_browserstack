import { config } from "./wdio.conf";
var _=require('lodash')
require('dotenv').config()

var override={
    user: process.env.BROWSERSTACK_USERNAME,
    key:process.env.BROWSERSTACK_ACCESS_KEY,
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
