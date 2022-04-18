const configs = require("./config")

configs.connect().then((result) => {
    if(result.connecting){
        console.log("connecting.......")
    }
    if(result.connected){
        result.request().query("SELECT * FROM dbo.Customers", (err, result) => {
            if(err){
                console.log(err)
            }
            console.log(result.recordset)
        })
        console.log("connected...")
    }
});