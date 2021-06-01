const axios = require('axios');

exports.homeRoutes = (req,res) {
    axios.get('http://localhost:3000/users')
        .then(function(response) {
            console.log(response)
            res.render('index', {users:response.data});
        }).catch(err =>{
            res.send(err);
        })
}
