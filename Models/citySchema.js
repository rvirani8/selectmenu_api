const mongoose =  require('mongoose');

const citySchema =  new mongoose.Schema({
    city_name:{
        type:String
    },
    state_id:{
        type:String
    },
    country_id:{
        type:String
    }
});

const city =  mongoose.model('city',citySchema);

module.exports = city;