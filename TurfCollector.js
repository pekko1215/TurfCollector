module.exports = {
    get:function(username,callback){
        var xRay = require("x-ray")();
        console.log("https://github.com/users/"+username+"/contributions")
        xRay("https://github.com/users/"+username+"/contributions","rect",[
            {
                "level":"@data-count",
                "date":"@data-date",
                "color":"@fill"
            }
        ])(callback)
    }
}