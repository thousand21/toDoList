//body
let body=document.getElementsByTagName("body")[0];

//grosse div gris
let divGris=document.createElement("div");
divGris.classList.add("divGris");
body.append(divGris);
//ligne 1 avec input + bouton add
let ligne1=document.createElement("div");
let input=document.createElement("input");
let add=document.createElement("button");
add.textContent='+ Add';
add.classList.add("addButton");
ligne1.classList.add("ligne1");
ligne1.classList.add("ligne");
ligne1.append(input);
ligne1.append(add);
divGris.append(ligne1);

////ligne2 avec titre
let ligne2=document.createElement("div");
let pDo=document.createElement("p");
pDo.textContent="Ma ToDo List";
ligne2.append(pDo);
divGris.append(ligne2);
ligne2.classList.add("ligne2");

///ligne 3 3 bouttons
let ligne3=document.createElement("div");
let bouttonDo=document.createElement('button');
bouttonDo.textContent="Do";
let bouttonToDo=document.createElement('button');
bouttonToDo.textContent="ToDo";
let bouttonAll=document.createElement('button');
bouttonAll.textContent="All"
bouttonDo.classList.add("bouton3");
bouttonToDo.classList.add("bouton3");
bouttonAll.classList.add("bouton3");
ligne3.classList.add("ligne");
ligne3.append(bouttonDo,bouttonToDo,bouttonAll);
divGris.append(ligne3);
console.log(ligne3)

///ligne4
let ligne4=document.createElement("div");
divGris.append(ligne4);


///bouton Clear
let ligne5=document.createElement('div');
let boutonClear=document.createElement('button');
boutonClear.textContent="Clear List";
boutonClear.classList.add("boutonClear");
ligne5.append(boutonClear);
divGris.append(ligne5);
ligne5.classList.add("ligne");


/////////////////////////////////////////


export {divGris,input,add,ligne4,bouttonDo}