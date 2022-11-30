const pizzas = [
    {
        "id": 1,
        "nombre": "muzzarella",
        "fuente": "./assets/muzarella.jpg",
        "ingredientes":[
            "salsa","queso muzzarella","oregano"
        ],
        "precio": 1000
    },
    {
        "id": 2,
        "nombre": "fugazzeta",
        "fuente": "./assets/fugazzeta.jpg",
        "ingredientes":[
            "salsa","queso muzzarella","cebolla","oregano"
        ],
        "precio": 1200
    },
    {
        "id": 3,
        "nombre": "napolitana",
        "fuente": "./assets/napolitana.jpg",
        "ingredientes":[
            "salsa","queso muzzarella","tomate","ajo","oregano"
        ],
        "precio": 1100
    },
    {
        "id": 4,
        "nombre": "jamon y morron",
        "fuente": "./assets/jamon y morron.jpg",
        "ingredientes":[
            "salsa","queso muzzarella","jamon","morron"
        ],
        "precio": 1150
    },
    {
        "id": 5,
        "nombre": "provolone",
        "fuente": "./assets/provolone.jpg",
        "ingredientes":[
            "salsa","queso provolone","oregano"
        ],
        "precio": 1400
    },
    {
        "id": 6,
        "nombre": "roquefort",
        "fuente": "./assets/roquefort.jpg",
        "ingredientes":[
            "salsa","queso roquefort","oregano"
        ],
        "precio": 1400
    }                
]

const imagenesPizzas = [
    {

    }
]
const valorInput = document.getElementById('select_id')
const valorButton = document.getElementById('boton_id')
const containerOculto= document.getElementById('container__oculto')
const tituloPizza= document.getElementById('pizza_nombre')
const precioPizza=document.getElementById('pizza_precio')
const textoError= document.getElementById('texto_error')
const containerCard = document.getElementById(`container__card`)
const imagenACambiar = document.getElementById(`imagen`)
/*valorButton.addEventListener("click",
    function () {
        console.log(valorInput.value) }) */

       /* 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
        👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio 
    de la pizza cuyo id coincida con el numero ingresado en el input. */ 



    const coincidenciaID = function(valorIngresado) {
       const resultadoFinal=pizzas.find(numeroID => numeroID.id === parseInt(valorIngresado))
       
        return resultadoFinal
    } 
valorButton.addEventListener("click",
    function () {
        if (coincidenciaID(valorInput.value)) {
            containerOculto.classList.remove("oculto")  /*Algo que no tengo en claro aca es si todo lo de agregar y sacar clases lo tendria que hacer en una funcion aparte y ejecutarla dentro del if, si me lo pueden aclarar en la correccion porfi */
            textoError.classList.add("oculto")
            imagenACambiar.classList.remove("oculto")
            tituloPizza.classList.remove("oculto")
            precioPizza.classList.remove("oculto")
            tituloPizza.textContent= "La pizza que ha elegido es la " + coincidenciaID(valorInput.value).nombre
            precioPizza.textContent= "Su precio es tan solo de: " + coincidenciaID(valorInput.value).precio + " pesos"
            imagenACambiar.src= coincidenciaID(valorInput.value).fuente
            let pizzaJSON = JSON.stringify(coincidenciaID(valorInput.value));

            localStorage.setItem("pizzaJSON", pizzaJSON)
            localStorage.setItem("idPizza",  coincidenciaID(valorInput.value).value)
            localStorage.setItem("nombrePizza",  coincidenciaID(valorInput.value).nombre)
            localStorage.setItem("precioPizza",  coincidenciaID(valorInput.value).precio)
            localStorage.setItem("imgPizza",  coincidenciaID(valorInput.value).fuente)
        }if (!coincidenciaID(valorInput.value)){
            containerOculto.classList.remove("oculto")
            tituloPizza.classList.add("oculto")
            precioPizza.classList.add("oculto")
            textoError.classList.remove("oculto")
            textoError.textContent="¡Error, el id ingresado no coincide con ninguna pizza!"
            imagenACambiar.classList.add("oculto")
        }if (valorInput.value.length ==0 ) {
            containerOculto.classList.remove("oculto")
            textoError.classList.remove("oculto")
            imagenACambiar.classList.add("oculto")
            textoError.textContent="¡Error, no ha ingresado ningun numero!"
        }

         })
        
        
/*if (coincidenciaID(valorInput.value)) {
    containerOculto.classList.remove("hiden")
    tituloPizza.textContent= coincidenciaID(valorInput.value).nombre
    precioPizza.textContent= coincidenciaID(valorInput.value).precio
}else {
    console.log("chau") /**Aca tendria que poner el error */
if (localStorage.getItem("nombrePizza") ){
    containerOculto.classList.remove("oculto")
        tituloPizza.classList.remove("oculto")
        console.log("Esta detectano que esta guardado")
        tituloPizza.textContent = "La pizza que ha elegido es la " + localStorage.getItem("nombrePizza")
    }
    
 if (localStorage.getItem("precioPizza")) {
        precioPizza.classList.remove("oculto")
        console.log("Esta detectano que esta guardado")

        precioPizza.textContent = "Su precio es:" + localStorage.getItem("precioPizza")
    }
    
if (localStorage.getItem("imgPizza")){
        imagenACambiar.classList.remove("oculto")
        console.log("Esta detectano que esta guardado")

        imagenACambiar.src= localStorage.getItem("imgPizza")
        console.log(localStorage.getItem("imgPizza"))
    }