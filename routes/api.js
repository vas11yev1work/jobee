const express = require('express');
const RateLimit = require('express-rate-limit');
const mailer = require('../lib/mailer.js');
const router = express.Router();

const mailRate = new RateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  message: 'Too many mails sent'
});


/* GET users listing. */
router.post('/sendForm', mailRate, async function(req, res, next) {
  let text = '';
  if(req.body.form === undefined || req.body.form.length < 0){
    res.status(422).json({message: 'Unprocessable entity', entity: req.body});
    return ;
  }
  for(let key in req.body.form){
    if(req.body.form[key] == ""){
      res.status(422).json({message: 'Unprocessable entity', entity: req.body});
      return ;
    }
    text += `${key}: ${req.body.form[key]}\n`
  }
  text += `IP: ${req.ip}`;
  mailer.sendMail(`Auto-report <noreply@prokat-control.bizml.ru>`, 'mail@jobee.es', 'New request', text)
      .then(result => res.status(200).json({message: 'Mail sent'}))
      .catch(error => next(error));
});

module.exports = router;
