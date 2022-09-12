const sqlize = require('sequelize');
const dB = require('../config/database');
const users = dB.define('users', {
    username: {
        type: sqlize.STRING
    },
    password: {
        type: sqlize.STRING
    },
    designation: {
        type: sqlize.STRING
    },
    src: {
        type: sqlize.STRING
    }
});
// Gig.sync().then(()=>{
//     console.log('table created')
// });
module.exports = users;
//# sourceMappingURL=Users.js.map