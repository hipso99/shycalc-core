
/**
 * Calcula el indice de masa corporal.
 * @param {number} kg Peso en kilogramos
 * @param {number} talla Talla de la persona
 * @param {string} unit Unudad de la talla cm o m (default cm)
 */
function imc (kg, talla, unit) {
    if (!unit)
        unit = 'cm';
    
    if (unit === 'cm'){
        talla /= 100;
    }

    return kg / Math.pow(talla,2);
}


function description (imc) {
    let msj = "No encontrado";
    
    if (imc < 16) {
        msj = "Desnutrición 3er grado";
    } else if (imc < 17) {
        msj = msj = "Desnutrición 2do grado";
    } else if (imc < 18.5) {
        msj = "Desnutrición";
    } else if (imc < 25) {
        msj = "Normal";
    } else if (imc < 30) {
        msj = "Sobrepeso";
    } else if (imc < 35) {
        msj = "Obesidad";
    } else if (imc < 40) {
        msj = "Obesidad 2do grado";
    } else {
        msj = "Obesidad 3er grado";
    }

    return msj;
}

export {
    imc,
    description
}

/*
module.exports = {
    'imc' : imc,
    'description': description,
}*/