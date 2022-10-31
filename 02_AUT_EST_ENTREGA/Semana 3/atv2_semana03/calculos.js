function cal_altura_tempo() {
    let v0 = document.getElementById("v0").value;
    let h_max;
    let tempo_total;
    let gravidade = 10;

    tempo_total = v0 / gravidade;
    h_max = v0 ** 2 / (gravidade * 2);

    let texto = `o tempo total: ${tempo_total} segundo(s) e altura máxima: ${h_max} metro(s)).`;

    document.getElementById("valor-enviado").innerHTML = texto;
    return `(${h_max}, ${tempo_total})`
}

function testar() {
    let resultados = document.getElementById("4")
    let a = document.getElementById("1")
    let b = document.getElementById("2")
    let c = document.getElementById("3")

    let det = (-b.value) ** 2 - 4 * a.value * c.value
    let xv = (-b.value) / (2 * a.value)
    let yv = -(det / (4 * a.value))

    let resultado = `(${xv}, ${yv})`

    resultados.innerHTML += "<li>" + `pontos x e y são =` + resultado + "</li>"
    return resultado
}

function temperatura_f() {
    let c = document.getElementById("far")
    let resultado = ((9 * c.value) / 5) + 32

    return resultado
}

function temperatura_c() {
    let d = document.getElementById("far")
    let resultado = ((d.value - 32) * 5 / 9)

    return resultado
}

function resul_temp() {
    let select = document.getElementById("escolha")
    let resultados = document.getElementById("resultado")
    let resultado

    if (select.value == "F") {
        resultado = temperatura_f()
    } if (select.value == "C") {
        resultado = temperatura_c()
    }
    resultados.innerHTML += "<p>" + resultado + "</p>"
    return resultado
}

function consumoenergia(){
    let K = parseInt(document.getElementById("v1").value)
    let W = parseInt(document.getElementById("v2").value)
    
    if(K<=100){
        let resultado= K*W;
        document.getElementById("respconsumo").value= resultado;
    }
    else if(K>100 && K<=200) {
        let resultado= K*(W*1.25);
        document.getElementById("respconsumo").value= resultado;
    }
    else{
        let resultado = K*(W*1.50);
        document.getElementById("respconsumo").value= resultado;
    }

}