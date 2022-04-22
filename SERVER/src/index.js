const sql = require("mssql/msnodesqlv8");
const databaseConfig = require("./config");

const dbConnect = new sql.connect(databaseConfig, (err) =>
  err
    ? console.log(err)
    : console.log("connected to database: " + databaseConfig.database)
);

const getCustomers = async () =>{
    try{
        let pool = await sql.connect(databaseConfig);
        let allCustomers = await pool.request().query('SELECT * FROM Customers');
        return allCustomers.recordset
    }catch (error){
        console.log(error)
    }
}

const insertCustomers = async (name, lastName, contacts, email, address, password) =>{
    try{
        let pool = await sql.connect(databaseConfig);
        let customer = await pool.request().query(`INSERT INTO Customers (CustomerId, FirstName, LastName, Contacts, Email, PhysicalAddress, UserPassword) 
        VALUES('identity', '${name}', '${lastName}', '${contacts}', '${email}', '${address}', '${password}')`)
        return customer;
    }catch(error){
        return error
    }
}


const getProducts = async () => {
    try{
        let pool = await sql.connect(databaseConfig);
        let products = await pool.request().query(`SELECT ProductName P, Price P, CategoryType C FROM Products P
         LEFT JOIN Category C ON P.CategoryId = C.CategoryId `);
        return products.recordset;
    }catch(error){
        return error
    }
}

// getProducts().then((response) => {
//     console.log(response);
// })


module.exports = {getProducts, insertCustomers, getCustomers}