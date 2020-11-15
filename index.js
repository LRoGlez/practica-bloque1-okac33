// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

let start = document.getElementsByTagName("ul").item(0);

runIl(start);

function runIl(list){
  let txtDiv2 = "Muestra";

  for(let i=0; i<colorList.length; i++){
    let txtDiv= colorList[i].colorName;
    let cdiv2=colorList[i].hex;

    let div= document.createElement("div");
    div.innerText =txtDiv;
    div.classList.add("color-name");
    div.addEventListener("click", function(){clickDiv(txtDiv,event)},true);

    let div2= document.createElement("div");
    div2.classList.add("color-show");
    div2.innerText= txtDiv2;
    div2.style.backgroundColor=cdiv2;

    let bt1= document.createElement("button");
    bt1.innerText = "Next Item Color";
    bt1.classList.add("color-set");
    bt1.addEventListener("click",function(){clickNext(cdiv2, txtDiv, event)}, false);

    let bt2= document.createElement("button");
    bt2.innerText="Page Color";
    bt2.classList.add("color-set");
    bt2.addEventListener("click", function(){setColor(cdiv2, event)}, false);
  }
}

/**let illist=[
 item = document.createElement("li"),
 item2 = document.createElement("li"),
 item3 = document.createElement("li"),
 item4 = document.createElement("li"),
 item5 = document.createElement("li"),
 item6 = document.createElement("li"),
 item7 = document.createElement("li"),
 item8 = document.createElement("li"),
];
let empezar = document.querySelector(".color-list-title");

/**console.log(empezar);
/**empezar.appendChild(item);
empezar.appendChild(item2);
empezar.appendChild(item3);
empezar.appendChild(item4);
empezar.appendChild(item5);
empezar.appendChild(item6);
empezar.appendChild(item7);
empezar.appendChild(item8);

let divNWhite = document.createElement("div");
let divMWhite = document.createElement("div");
let button1w = document.createElement("button");
button1w.type = "button";
button1w.innerText = "next item color";
let button2w = document.createElement("button");
button2w.type = "button";
button2w.innerText = "page color";

for (let i = 0; i < empezar.length; i++) {
  empezar[i].classList.add("color-list");
}*/
