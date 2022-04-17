// Variables
const texto = document.getElementById('txtArea');
const textoCifrado = document.getElementById('txtCifrado');
const btnCifrar = document.getElementById('btnCifrar');
const btnDecifrar = document.getElementById('btnDecifrar');
let data;

// EventListeners
texto.addEventListener('input', (e)=>{
    data = (e.target.value).trim();
});

btnCifrar.addEventListener('click', ()=>{
    textoCifrado.textContent = cifrar(data)
});

btnDecifrar.addEventListener('click', ()=>{
    textoCifrado.textContent = decifrar(data)
});


// Funciones

function cifrar(txt){
    let resultado = '';

    if(txt == '' || txt == undefined){
        toast();
    }else{
        for (let i = 0; i < txt.length; i++) {
            if( txt[i] == 'e'){
                resultado = resultado + 'enter';
            }else if( txt[i] == 'i' ){
                resultado = resultado + 'imes';
            }else if( txt[i] == 'a' ){
                resultado = resultado + 'ai';
            }else if( txt[i] == 'o' ){
                resultado = resultado + 'ober';
            }else if( txt[i] == 'u' ){
                resultado = resultado + 'ufat';
            }else{
                resultado = resultado + txt[i];
            }
        }

    }

    return resultado;

}

function decifrar(txt){
    return resultado = txt.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
}


function toast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}