var orm = require('../config/orm.js');

var burger_call = {
    insert: function(some_val, cb){
        orm.insdert('burgers_tbl', 'burger_name', some_val, function(rest){
            cb(res);
        });
    },
    read: function(cb){
        orm.read('burgers_tble', function(res){
            cb(res);
        });
    },
    update: function(user_id, cb){
        orm.update('burger_tble', 'devoured', 1 , 'id', user_id, function(res){
            cb(res);
        });
    },
    delete: function(user_id, cb){
        orm.delete('burger_tbl', 'id', user_id, function(res){
            cb(res);
        });
    }
}

module.exports = burger_call;