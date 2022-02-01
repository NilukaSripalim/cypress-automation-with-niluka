/*
 *   Copyright (c) 2021 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content." 
 */
describe('Sync- Async', () => {
    it('TC example', () => {
        
        cy.visit("https://wso2.com/identity-server/");

        cy.get(".navbar-brand").eq(1)
        .invoke("text")
        .then((text) => {
           // return text;
           cy.log(text)
        })
       // .should("equal", "WSO2 Identity Server")
    });
});