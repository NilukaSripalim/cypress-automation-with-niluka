/*
 *   Copyright (c) 2021 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content." 
 */
describe(`Demo test to show Cypress task using plugins`, () => {
    it(`write to log using cy.task`, () => {
      console.log(`writing to a log file`)
  
      cy.task('logInfo', `cy.task info log added`)
      cy.task('logError', `cy.task error log added`)
    })
  })
  