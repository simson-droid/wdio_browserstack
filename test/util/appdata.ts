const data=require('../data/appdata.json')
export default class appData{
    getEnv(){
        return process.env.Env
    }
    getUrls(){
        return data.urls[this.getEnv()]
    }
    getCreds(){
        let username,password
        data.users.forEach((user)=>{
            if((user.env).includes(this.getEnv())){
                username=user.username
                password=user.password
            }
        })
        return [{username,password}]
    }

}