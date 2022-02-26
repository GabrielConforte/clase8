let {db} = require("./index");
let knex = require("knex");

let mysql = {
    client: "mysql",
    connection: {...db},
    pool: {min: 0, max: 7}
};


class Database {
    static client;
    constructor(){
        if(!Database.client){
            Database.client = knex(mysql);
            this.client = Database.client;
        }
        this.client = Database.client;       
    }
}
module.exports = new Database().client;
