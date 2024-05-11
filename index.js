// ELEMENT BY ID

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;
let precio_billetes = 0;
let precio_niño_ad = 0;

// TARIFAS

let senc_ida = 1.5;
let ida_vuelta = 2.5;
let multiv = 5;
let bono = 8;
let bono_disc = 6;
// SUMA Y RESTA DE BILLETES

function increment(){
    
    count += 1;
    countEl.textContent = count;
}

function decrement(){
    count -= 1;
    countEl.textContent = count;
}

let billete = document.getElementById("billete");
function save(){
    if (count <= 0) {
        reset();
    } else {
        save2()
    }
}

function save2() {
    let contpers = document.getElementById("cont_pers");
    let cuentapers = count;
    // contpers.textContent += " " + cuentapers + " persona -";
    if (cuentapers == 1) {
        contpers.textContent += " " + cuentapers + " persona -";
    } else if (cuentapers > 1) {        
        contpers.textContent += " " + cuentapers + " personas -";
    }
    let valor = billete.value;
    let countStr = precio_billetes;
    if (valor == "bono-disc"){
        countStr = " " + precio_billetes + "€ (Bono discapacidad) -";
    } if (valor == "idayvuelta"){
        countStr = " " + precio_billetes + "€ (Ida y vuelta) -";    
    } if (valor == "multiviajes"){
        countStr = " " + precio_billetes + "€ (Multiviaje) -";    
    } if (valor == "bono"){
        countStr = " " + precio_billetes + "€ (Bono) -";;
    } if (valor == "sencillo-ida") {
        countStr = " " + precio_billetes + "€ (Sencillo Ida) -";
    }
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    precio_billetes = 0;
    reset();
}

// RESET DE FORMA

function reset(){
    document.querySelectorAll('[name=edad]').forEach((x) => x.checked = false);
    billete.value = "nulo"
}

// TARIFA NIÑO Y ADULTO

function tar_niño(){
    precio_niño_ad = 0;
}

function tar_adulto(){
    precio_niño_ad = 1;
}

function tarifas(){
    let billete = document.getElementById("billete");
    let valor = billete.value;
    if (valor == "bono-disc"){
        precio_billetes=(bono_disc+precio_niño_ad)*count;
    } if (valor == "idayvuelta"){
        precio_billetes=(ida_vuelta+precio_niño_ad)*count;
    } if (valor == "multiviajes"){
        precio_billetes=(multiv+precio_niño_ad)*count;
    } if (valor == "bono"){
        precio_billetes=(bono+precio_niño_ad)*count;
    } if (valor == "sencillo-ida") {
        precio_billetes=(senc_ida+precio_niño_ad)*count;
    }
}
