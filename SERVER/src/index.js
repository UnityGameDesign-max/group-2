const configs = require("./config")

configs.connect().then((result) => {
    
    const viewAllCustomers = () => {
        result.request().query("SELECT * FROM dbo.Customers", (err, result) => {
            try{
                console.log(result.recordset)
            }catch(err){
                console.log(err)
            }
        })
    }
    
    const addCustomers = () => {
        result.request().query("SELECT * FROM dbo.Customers WHERE CustomerId='1'", (err, result)=>{
            try{
                console.log(result)
            }catch(err){
                console.log(err)
            }
        })
    }
    
});