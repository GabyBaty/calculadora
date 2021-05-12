const {sumar,restar,multiplicar,dividir} = require('./calculadora')

switch (ProcessingInstruction.argv[2]){
    case "sumar" :
        sumar(process.argv[3],process.argv[2])
        break;
        case"restar" :
        restar(porcess.argv[3],porcess.argv[2])
        break;

        default:
            break;

}
