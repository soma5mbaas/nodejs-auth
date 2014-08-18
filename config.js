'use strict'

var config = {
    port: 3000,
    database: {
        ACCOUNT: {
            bucket: "beer-sample",
            host: "stage.haru.io:8091",
            // host: "localhost:8091",
            // username: "account",
            // password: "soma05baas"
        },
        TOKEN: {
            bucket: "token",
            host: "stage.haru.io:8091",
            // user: "Administrator",
            // password: "soma05baas"
        }
    }   
};

module.exports = config;