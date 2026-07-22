export function validarEmail(email) {
    if (email.includes('@') &&
        (email.endsWith('.com') ||
            email.endsWith(".edu.br"))) {
        return true;
    }
    return false;
}

export function validarMatricula(matricula) {
    if (matricula) {
        return true;
    }
    return false;
}

export function validarCPF(cpf) {
    if (cpf) {
        return true;
    }
    return false;
}

export function getGetters(obj) {

    const getters = [];
    const methods = new Set(); //avoids repeat call of overriden mthds

    let prototype = Object.getPrototypeOf(obj);

    while (prototype !== Object.prototype) { //avoids going all the way to base JS Object class
        const methodNames = Object.getOwnPropertyNames(prototype);

        for (const methodName of methodNames) {
            if (methodName.startsWith('get') &&
                typeof obj[methodName] === 'function') {
                methods.add(methodName);
                getters.push(methodName);
            }
        }

        prototype = Object.getPrototypeOf(prototype);
    }
    return getters;
}

export function logGetters(classInstance) {
    // for in -> keys
    // for of -> values
    for (const method of getGetters(classInstance)) {
        console.log(classInstance[method]());
    }
}