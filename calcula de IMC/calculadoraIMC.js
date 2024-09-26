function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}


function retornarStatusIMC(imc) {
    let status;

    if (imc < 18.5) 
        {
        status = 'abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.9)
        {
        status = 'Peso Normal';     
    }
    else if (imc >= 24.9 && imc < 30) 
        {
        status = 'Acima do peso';
    }
    else
    {
        status = 'obeso';
    }
    return status;
}

function validaParametro(parametro) {
    if (isNaN(parametro)) {
        return false;
    }
    else
    {
        return true;
    }
};


exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornarStatusIMC = retornarStatusIMC;
exports.validaParametro = validaParametro;