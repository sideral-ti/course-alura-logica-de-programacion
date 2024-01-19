// alert('Hola Mundo, mi primer script');
// prompt('Me indicas un número, por favor ?')

let numeroSecreto = 5;
let numeroUsuario = prompt('Me indicas un número, por favor? ');
console.log('El número que ingresaste ese el: ' + numeroUsuario);

if (numeroUsuario == numeroSecreto) {
        alert('Acertaste el número! El número secreto es:   ' + numeroSecreto);
} else {
    alert('Has fallado');
}