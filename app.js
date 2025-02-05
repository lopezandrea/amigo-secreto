// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let elementoAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let sorteados=[];

function agregarAmigo(){
    let amigo = elementoAmigo.value;
    if(validarTexto(amigo)){
        amigos.push(amigo); 
        listaAmigos.innerHTML="";
        let li;
        for (let index = 0; index < amigos.length; index++) {
            li = document.createElement('li');
            li.append(amigos[index]);
            listaAmigos.appendChild(li);
        }   
        limpiarTexto();
    }
}

function validarTexto(texto){
    if(texto==''){
        alert("Por favor, inserte un nombre.");
        return false;
    }
    return true;
}

function limpiarTexto(){
    elementoAmigo.value='';
}

function sortearAmigo(){
    let cantidadAmigos=amigos.length;
    if(cantidadAmigos==0){
        alert("Debe ingresar al menos un amigo.");
    }
    else{
        let numeroAleatorio= Math.floor(Math.random() * cantidadAmigos);
        if(sorteados.includes(numeroAleatorio)){
            if(sorteados.length==cantidadAmigos)
                alert("Todos los amigos fueron sortados");
            else
                sortearAmigo();
        }
        else{
            sorteados.push(numeroAleatorio);
            document.getElementById("resultado").innerHTML=amigos[numeroAleatorio];
        }
    }
}