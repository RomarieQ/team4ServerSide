const Sequelize = require('sequelize');
<<<<<<< HEAD
const sequelize = new Sequelize('travel-app', 'postgres', process.env.DB_PASS, {
=======
const sequelize = new Sequelize('travel-app', 'postgres', 'LeatherManToolsarethebest!', {
>>>>>>> aef4ff656afb45599e5988338029528329db97b4
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
<<<<<<< HEAD
        console.log('connected to travel-app postgress database');
    },
    function(err) {
        console.log(err);
    }
);
=======
        console.log('Connected to travel-app through postgres database');
    },
    function(err){
        console.log(err);
    }
);

>>>>>>> aef4ff656afb45599e5988338029528329db97b4
module.exports = sequelize;