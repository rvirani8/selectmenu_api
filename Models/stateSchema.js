const mongoose =  require('mongoose');

const stateSchema =  new mongoose.Schema({
    state_name:{
        type:String
    },
    country_id:{
        type:String
    }
});

const state =  mongoose.model('state',stateSchema);

module.exports = state;