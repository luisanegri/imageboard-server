const { Router } = require('express');
const Image = require('./model');
const router = new Router();

router.get('/image', (req, res) => {
  Image.findAll()
    .then(image => res.send(image))
    .catch(error => console.log(error));
});

module.exports = router;
