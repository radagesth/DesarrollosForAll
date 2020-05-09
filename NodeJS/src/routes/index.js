const express = require ('express');
const router = express.Router();

//routes
router.get('/',(req,res)=>{

    res.render('index', {title: 'Bienvenido Pololeame' });

    });

    router.get('/register',(req,res)=>{

        res.render('Register', {title: 'Register Page.' });
    
        });

    router.get('/contact',(req,res)=>{

        res.render('Contact', {title: 'Contact Page.' });
    
        });

module.exports = router;