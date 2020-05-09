const app= new Vue ({
    el: '#app',
    data:{
        titulo:'Hola Mundo Con Vue', // variable con un texto dentro
        frutas:['Manzana','Pera','Platano'], // array con 3 variables dentro
        frutas2:[{nombre:'Manzana', cantidad:15}, // array con 3 variables y sus cualidades
        {nombre:'Pera', cantidad: 10},//donde se describen la variable y dos de sus cualidades, en este caso nombre y cantidad.
        {nombre:'Platano', cantidad:5}],nuevaFruta: '',Frutacantidad: '',
    },
    methods: {
        agregarFuta(){ // metodo nuevo para llamar 
            console.log('diste click');// se ejecuta al hacer clic el boton en index.html
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad: this.Frutacantidad,
            });
            this.nuevaFruta= ''; // para limpiar el input luego de hacer clic
            this.Frutacantidad = ''; // Para limpiar el input luego de hacer clic en el
        }
      }
})