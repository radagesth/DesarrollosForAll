const express = require('express');
const app = express ();
const path = require('path');// para trabajar con windows
const indexRoute = require('./routes/index');// se le da a una constante la ruta a usar por router


//settings
app.set('port',3000);// ene sta variable definimos el puerto a ocupar y luego simplemente la llamamos desde aqui
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');//app de ejs para html5
app.engine('html',require('ejs').renderFile);//se le indica que se van a utilizar documentos html pero se van a renderizar con el visor ejs.




//middlewares

//routes
app.use(indexRoute);

//static files


//listening
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'))
});