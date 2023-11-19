const menu_icon = document.querySelector(".menu_icon")
const menu_nav = document.querySelector(".menu_nav")
const button = document.querySelector("button")
const placeMenu =document.querySelector(".place_menu")
function addClassShow(){
    menu_nav.classList.toggle("show")
}

menu_icon.addEventListener("click",addClassShow)
let contador=0; 

function addMenu(){
    if (contador== 0){
        const article= document.createElement("article")
        article.classList.add("comida")
        article.innerHTML=`<p>Todos los tacos a 20 varos</p>
        <p>Botellas de refresco o aguas de sabor a 25</p>`
        placeMenu.appendChild(article)
        contador++
        console.log(3)
    }else{
        article.remove()
        contador--
    }

}

button.addEventListener("click", addMenu)