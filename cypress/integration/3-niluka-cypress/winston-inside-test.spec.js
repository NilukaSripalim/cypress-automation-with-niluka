/*
 *   Copyright (c) 2021 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content." 
 */
const { createLogger, format, transports } = require('winston')

const { combine, timestamp, label, printf } = format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`
})

const logger = createLogger({
  format: combine(label({ label: 'test' }), timestamp(), myFormat),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/info.log' }),
    new transports.Console({ level: 'error' }),
  ],
})

describe(`Demo test to show winston logger usage directly without plugins`, () => {
  it(`write to log directly using winston logger`, () => {
    console.log(`writing to a log file`)

    logger.info(`winston info log added`)
    logger.error(`winston error log added`)
  })
})
