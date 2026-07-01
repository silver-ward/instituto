class Conversor{
    celsiusParaFahrenheit(celsius){
        return ((9/5) * celsius + 32);
    }

    kmParaMilhas(km){
        return (km * 0.621371);
    }

    minutosParaHoras(minutos){
        return (minutos / 60);
    }
}

// module.exports = Conversor;
// module.exports is called by require(), which is a regular
// function call that runs synchronously and dynamically.
// uses CommonJS(CJS).

export { Conversor };
// export, on the other hand, is called by import, which is
// static, meaning it must be top-level (not nested) and
// resolved ahead of time (by the compilers).
// uses ECMAScript Modules (ESM).
// * for EMS to run via Node, the line "type": "module"
// must be added to the package.json file. Alternatively, the
// file being run should be .msj instead
// .msj runs as ESM regardless of package.json
// .csj runs as CJS regardless of package.json

// A module is a file that encapsulates its own code.
// Before modules existed, JavaScript was written within
// HTML and all variables shared the same global scope.
// JavaScript used to only run in browsers and it lacked some
// standard language functionalities, such as moduling.
// Node is a standalone program that lets you run JavaScript
// directly on a computer, outside any browser. Node added
// things such as read/write, networking, terminal integration
// and moduling. Its moduling system is called CommonJS.
// years later, the actual JavaScript language was updated
// to include moduling too. That is ECMAScript Modules.
// (basically, the future is ESM, but CJS is still ever-present).