
describe('Sync- Async', () => {
    it('TC example', () => {
        
        cy.visit("https://wso2.com/identity-server/");

        /**
         * This is working as expected
         */
    //     cy.get(".navbar-brand").eq(1)
    //     .invoke("text")
    //     .then((text) => {
    //     return text;
    //     })
    //    .should("equal", "WSO2 Identity Server");

    /**
     * Causes sync-async error
     */

    //     cy.get(".navbar-brand").eq(1)
    //     .invoke("text")
    //     .then((text) => {
    //         cy.log(text)
    //         return text;
    //     })
    //    .should("equal", "WSO2 Identity Server");

    /**
     *  Solution 1:
    */
    // cy.get(".navbar-brand").eq(1)
    // .invoke("text")
    // .then((text) => {
    //     cy.log("Text",text).then(() =>{

    //         return text;
    //     })
    // })
    // .should("equal", "WSO2 Identity Server");

    /**
     *  Solution 2:
     */
    cy.get(".navbar-brand").eq(1)
    .invoke("text")
    .then(cy.log)
    .then((text) => {
        return text;
    })
    .should("equal", "WSO2 Identity Server");
    });
});
cd ..