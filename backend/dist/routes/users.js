const exp = require('express');
const router = exp.Router();
const Db = require('../config/database');
const USERS = require('../models/Users');
router.use(exp.json());
router.post('/getuser', (req, res, next) => {
    USERS.findOne({
        where: { username: req.body.username, password: req.body.password }
    })
        .then(users => {
        res.send(Object.assign(Object.assign({}, users), { status: true }));
    })
        .catch(err => console.log(err));
});
module.exports = router;
//# sourceMappingURL=users.js.map