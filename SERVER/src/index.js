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
        VALUES('${name}', '${lastName}', '${contacts}', '${email}', '${address}', '${password}')`)
        return customer.recordset;
    }catch(error){
        return error
    }
}

const getProductOfId = async(productId) =>{
    try{
        let pool = await sql.connect(databaseConfig);
        let productOfId = await pool.request().query(`SELECT * FROM dbo.Products WHERE ProductId = ${productId}`)
        return productOfId;
    }catch(error){
        return error
    }
}

const insertOrderedItems = async (productId, orderedQuantity) => {
    try{
        let pool = await sql.connect(databaseConfig);
        let orderedItems = await pool.request().query(`INSERT INTO dbo.OrderedItems (ProductId, OrderedQuantity)
        VALUES ('${productId}', '${orderedQuantity}')`)
        return orderedItems;
    }catch(error){
        return error;
    }
}

const getOrderedItems = async () =>{
    try{
        let pool = await sql.connect(databaseConfig);
        let orderedItems = await pool.request().query(`SELECT ProductId, OrderedQuantity FROM OrderedItems`)
        return orderedItems.recordset;
    }catch(error){
        return error
    }
}

const getProducts = async () => {
    try{
        let pool = await sql.connect(databaseConfig);
        let products = await pool.request().query(`SELECT Images Product, ProductName Product, Price Product, CategoryType Category FROM Products Product
         LEFT JOIN Category Category ON Product.CategoryId = Category.CategoryId `);
        return products.recordset;
    }catch(error){
        return error
    }
}

// getProducts().then((response) => {
//     console.log(response);
// })


module.exports = {getProducts, insertCustomers, getCustomers, getProductOfId, insertOrderedItems, getOrderedItems}