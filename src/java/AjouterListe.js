import { divGris,input,add,ligne4,bouttonDo } from "./creation.js";

let ajouter=()=>{
    let divTache=document.createElement("div");

let divTacheGauche=document.createElement("input");
let btonOk=document.createElement("button");
btonOk.textContent="ok";
let btonEdit=document.createElement("button");
btonEdit.textContent="Edit";
let btonDelete=document.createElement("button");
btonDelete.textContent="Delete";
divTache.classList.add("tache");
let divTacheBouton=document.createElement("div");
divTacheGauche.setAttribute("disabled","disabled");
divTacheGauche.value=input.value;
ligne4.classList.add("ligne4");
ligne4.append(divTache);
divTache.append(divTacheGauche,divTacheBouton);
divTacheGauche.classList.add("divTache");
divTacheBouton.classList.add("tacheDroite");
divTacheBouton.append(btonOk,btonEdit,btonDelete);
}

export {ajouter}