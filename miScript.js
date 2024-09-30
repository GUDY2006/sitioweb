function listaNotas() {
    document.getElementById('promedio').textContent = '0';
    document.getElementById('Nota').textContent = '0';
    document.getElementById('aplazo').textContent = 'No consultado';
}

function calcularpromedio() {
    let nota1 = Number(document.getElementsByTagName("input")[0].value);
    let nota2 = Number(document.getElementsByTagName("input")[1].value);
    let nota3 = Number(document.getElementsByTagName("input")[2].value);
    let nota4 = Number(document.getElementsByTagName("input")[3].value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Por favor, ingresa todas las notas.");
        return;
    }

    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}

function notaMasAlta() {
    let nota1 = Number(document.getElementsByTagName("input")[0].value);
    let nota2 = Number(document.getElementsByTagName("input")[1].value);
    let nota3 = Number(document.getElementsByTagName("input")[2].value);
    let nota4 = Number(document.getElementsByTagName("input")[3].value);

    let notaAlta = Math.max(nota1, nota2, nota3, nota4);
    document.getElementById('Nota').textContent = notaAlta;
}

function hayPlazo() {
    let nota1 = Number(document.getElementsByTagName("input")[0].value);
    let nota2 = Number(document.getElementsByTagName("input")[1].value);
    let nota3 = Number(document.getElementsByTagName("input")[2].value);
    let nota4 = Number(document.getElementsByTagName("input")[3].value);

    if (nota1 < 60 || nota2 < 60 || nota3 < 60 || nota4 < 60) {
        document.getElementById('aplazo').textContent = 'Sí, hubo aplazos.';
    } else {
        document.getElementById('aplazo').textContent = 'No, no hubo aplazos.';
    }
}
