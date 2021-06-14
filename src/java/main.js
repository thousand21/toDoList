import { ajouter } from "./AjouterListe.js";
import { divGris,input,add,bouttonDo, ligne4 } from "./creation.js";
let body=document.getElementsByTagName("body")[0];
////Ajouter
//avec bouton add
add.addEventListener("click",()=>{
ajouter();

})

/////add avec enter
input.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        ajouter();
    }
})

///trier do,ToDo,All
bouttonDo.addEventListener("click",()=>{

})

///////// transformer une tache en ok
ligne4.addEventListener("click",(e)=>{
    if(e.target.textContent=="ok"){
        e.target.parentElement.parentElement.style.backgroundColor="blue";
    }
    else if(e.target.textContent=="Edit"){
        e.target.parentElement.parentElement.children[0].removeAttribute("disabled");
        e.target.parentElement.parentElement.children[0].setAttribute("enabled","enabled");
        e.target.parentElement.parentElement.children[0].addEventListener("focusout",()=>{
            e.target.parentElement.parentElement.children[0].removeAttribute("enabled");
        e.target.parentElement.parentElement.children[0].setAttribute("disabled","disabled");
        })
        }
    
});

/////


