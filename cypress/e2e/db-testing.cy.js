it("Database test", () => {
    // call the
    cy.task("QUERYDB", 
    {
        // get config from cypress.config.js
        dbConfig: Cypress.config('DBCONFIG'),
        // Run SQL
        sql: 'SELECT * from "Product"'
    }).then((result) => {
        console.log(result.rows[0].Prod_Category)
        console.log(result.rows[0].Prod_Sub_Category)
        console.log(result)
    })
})