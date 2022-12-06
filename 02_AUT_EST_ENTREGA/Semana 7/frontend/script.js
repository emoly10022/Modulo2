function calculadora() {
    let tabuada = parseInt(document.getElementById("numeroTabuada").value)
    let valorInicial = parseInt(document.getElementById("valorInicial").value)
    let valorFinal = parseInt(document.getElementById("valorFinal").value)

    let printar = document.getElementById("texto")
    let print =""

    while(valorInicial<=valorFinal) {
        print += `${tabuada} X ${valorInicial} = ${tabuada*valorInicial}<br>`;
        valorInicial++;
        printar.innerHTML= print
    }
    
    return printar
    
        
}

function palindromo() {
    let valor = document.getElementById("palindromo").value
    let printar = document.getElementById("resultado")
    let valorInicial = valor.split("")
    let valorContrario = valorInicial.reverse()
    let valorFinal = valorContrario.join("")

    if (valor == valorFinal) {
        let final = "O valor é um Palíndromo" +'</br>'
        printar.innerHTML += final
        return printar
    } else {
        let final = "O valor não é um Palíndromo" +'</br>'
        printar.innerHTML += final
        return printar
        
    }

}

function UmDois(){
    let valor = document.getElementById("pi").value
    let print = document.getElementById("resultado")
    for(i=1; i<=valor; i++) {
        print.innerHTML += i +'</br>';
        if (i % 3 == 0) {
            print.innerHTML += "PI"+'</br>'
            

        }
    }

}

function azulejoCalc(){
    let AA = document.getElementById("AA").value
    let BB = document.getElementById("BB").value
    let CC = document.getElementById("CC").value
    let DD = document.getElementById("DD").value
    let print = document.getElementById("resultado")

    let test1 = CC/AA
    let test2 = DD/BB
    let result = (test1*test2)*1.05
    let valorFinal = Math.ceil(result)

    print.innerHTML += `A quantidade necessaria de Azulejos para a obra será de: ${valorFinal} azulejos.`


    return print


}


