var connection = require('../config/connection.js');

// INside the `orm.js` file create the code that will execute mySQL command

// create, read, update, delete

var orm = { 
    inser: function(some_tbl, some_col, some_val, cb) {
        connection.query('INSERT INTO ' + some_tbl + ' ( ' + some_col + ') ' + ' VALUES (?)', [some_val], function(err, result){
            cb(result);
        });

    },
    update: function(some_tbl, some_set_col, some_set_val, some_col_param, some_val_param, cb){
        connection.query('UPDATE' + some_tbl + 'SET' + some_set_col + ' = ? WHERE ' + some_col_param + ' = ?', [some_set_val, some_val_param], function(err, result){
            cb(result);
        });
},
    delete: function(some_tbl, some_col, some_val, cb){
        connection.query('DELETE FROM ' + some_tbl + ' WHERE ' + some_col + ' = ?', [some_val], function(err, result){
            cb(result);
        });
    }
}

module.exports = orm;