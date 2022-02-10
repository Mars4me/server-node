const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id: 1, name: 'Ulbi tv'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Vitalik'},

]

router.get('/users', (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    console.log(req.params);
    res.send(users)
})

router.post('/users', (req, res) => {
    const user = req.body
    users.push(user);
    res.send(user)
})

module.exports = router