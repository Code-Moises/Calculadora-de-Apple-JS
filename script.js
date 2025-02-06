const pantalla = document.getElementById('pantalla');

function agregar(num) {
    pantalla.value += num;
}

function limpiar() {
    pantalla.value = '';
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Syntax Error';
    }
}

//cambia el numero de negativo a positivo o viceversa
function cambiar() {
    if (pantalla.value[0] === '-') {
        pantalla.value = pantalla.value.slice(1);
    } else {
        pantalla.value = '-' + pantalla.value;
    }
}


function porcentaje() {
    pantalla.value = pantalla.value / 100;
}

//evento para que escuche las letras que presionas
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '1':
            agregar('1');
            break;
        case '2':
            agregar('2');
            break;
        case '3':
            agregar('3');
            break;
        case '4':
            agregar('4');
            break;
        case '5':
            agregar('5');
            break;
        case '6':
            agregar('6');
            break;
        case '7':
            agregar('7');
            break;
        case '8':
            agregar('8');
            break;
        case '9':
            agregar('9');
            break;
        case '0':
            agregar('0');
            break;
        case '.':
            agregar('.');
            break;
        case '+':
            agregar('+');
            break;
        case '-':
            agregar('-');
            break;
        case '*':
            agregar('*');
            break;
        case '/':
            agregar('/');
            break;
        case 'Enter':
            calcular(); 
            break;
        case 'Backspace':
            limpiar(); 
            break;
        default:
            break;
    }
});