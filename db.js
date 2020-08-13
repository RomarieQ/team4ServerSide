const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});
// const sequelize = new Sequelize('travel-app', 'postgres', process.env.DB_PASS, {
//     host: 'localhost',
//     dialect: 'postgres'
// });

sequelize.authenticate().then(
    function() {
        console.log('connected to travel-app postgress database');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;