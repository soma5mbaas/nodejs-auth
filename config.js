'use strict'

var config = {
    port: 3000,
    database: {
        buckets:[
            {
                bucket: "account",
                host: "localhost:8091",
            },
            {
                bucket: "token",
                host: "localhost:8091",
            }
        ]
    },
    write_server: {
        host: "localhost", 
        port: 8000
    },
    read_server: {
        host: "localhost", 
        port: 8000
    }  
};
9
module.exports = config;