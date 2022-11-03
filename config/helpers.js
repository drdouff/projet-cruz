const Mysqli = require('mysqli');


let conn = new Mysqli({
    host: 'localhost',
    port: 3306,
    user: 'root',
    pass: '',
    db: 'cruz'
});

let db = conn.emit(false, '');


module.exports = {
    database: db
}