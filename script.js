const dataNumeros = document.getElementsByName('data-number');
const dataOpera   = document.getElementsByName('data-opera');
const dataDelete  = document.getElementsByName('data-delete')[0];
const dataIgual  = document.getElementsByName('data-igual')[0];
var result = document.getElementById('result');

var operacionAnterior = '';
var operacionActual = '';
var operacion = undefined;

dataNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
      agregarNumero(boton.innerText);
    })
});

dataOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selecOperacion(boton.innerText);
    })
})

dataIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

dataDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

function calcular (){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;

        case '-':
            calculo = anterior - actual;
            break;

        case 'X':
            calculo = anterior * actual;
            break;

        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
    
};

function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
};

function actualizarDisplay() {
    result.value = operacionActual;
}

function clear (){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined
}

function selecOperacion (op){
    if (operacionActual === '') return;
    if (operacionAnterior !== ''){
        calcular();
    }

    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
    
};

clear();