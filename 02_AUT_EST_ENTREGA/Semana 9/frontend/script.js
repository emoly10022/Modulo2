function valorPresente1(){
    let v = document.getElementById("vP").value
    let n = document.getElementById("n").value
    let i = document.getElementById("i").value
    let selecionar = document.getElementById("selecionar").value
    let print = document.getElementById("resultado")
    let resultado
    
    if (selecionar=="valorFuturo") {
        resultado = v*((1+(i/100))**n)
        let result =Math.round(resultado)
        return print.innerHTML += `<p> O valor que você irá receber é: ${result}$ </p>`
    }
    
    else{
        resultado = v/((1+(i/100))**n)
        let result =Math.round(resultado)
        return print.innerHTML += `<p> O valor do capital presente é: ${result}$ </p>`    
    }
    }

function binario(){
    let numero = document.getElementById("binario1").value
    let print = document.getElementById("resultado")
    
    let lista=[]
    
    
    if (numero>=128 ){
        lista.push(1)
        numero = numero -128
    }else{
        lista.push(0)
    
    }
    if (numero>=64){
        lista.push(1)
        numero = numero -64
    }else{
        lista.push(0)
    }
    if(numero>=32){
    lista.push(1)
    numero = numero -32
    }else{
        lista.push(0)
    }
    if(numero>=16){
        lista.push(1)
        numero = numero -16
    }else{
        lista.push(0)
    }
    if(numero>=8){
        lista.push(1)
        numero = numero -8
    }else{
        lista.push(0)
    }
    if (numero>=4){
        lista.push(1)
        numero = numero -4
    }else{
        lista.push(0)
    }
    if(numero>=2){
        lista.push(1)
        numero=numero - 2
    }else{
        lista.push(0)
    }
    if(numero>=1){
        lista.push(1)
        numero = numero -1
    }else{
        lista.push(0)
    }
        let result=lista.join('')
    
        return print.innerHTML+= `<p> O número em Binário é: ${result} </p>`
    
    }
    
function jurosSimples(){
    let capitalPresente = document.getElementById("p").value
    let i = document.getElementById("i").value
    let n = document.getElementById("n").value
    let print = document.getElementById("resultado")
    let resultado

    resultado = capitalPresente*(1+((i/100)*(n/360)))

    let result =Math.round(resultado)

    return print.innerHTML += `<p> O montante atual é: ${result}$ </p>`

}

function impressaoMaluca() {
    let print = String(document.getElementById("numero").value);
    printArray = print.split("");
    for (let i = 0; i < printArray.length; i++) {
      document.getElementById("resultado").innerHTML += `<p style = "margin-left: ${i*20}px;">${printArray[i]}</p>`;
    }
  }