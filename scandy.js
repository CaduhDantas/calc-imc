function conta(){

let alturainpu = window.document.getElementById('alt')
let pesoinpu = window.document.getElementById('pes')
let botao = window.document.getElementById('botão')
let res = document.getElementById('res')


let altura = Number(alturainpu.value);
let peso = Number(pesoinpu.value);

let trans = altura / 100
let resultado = peso / (trans * trans);
resultado = resultado.toFixed(2)

let section = document.querySelector('section')


if(altura <= 0 || peso <= 0){
    alert('Favor, digite um valor válido!')
}


else if(resultado >= 1 && resultado <= 18.5  ){
    // Magreza obesidade 0
    //alert(`magresa ${resultado}`)

    section.style.height = '570px';
    res.innerHTML = `Seu IMC é ${resultado} <br>  <strong> Magreza - obesidade nvl 0 </strong>`
    
}


else if(resultado >= 18.6 && resultado <= 24.9){
    //normal obesidade 0
    //alert(`normal ${resultado}`)

    section.style.height = '570px';
    res.innerHTML = `Seu IMC é ${resultado} <br>  <strong> Normal - obesidade nvl 0 </strong>`

}


else if(resultado >= 25 && resultado <=29.9){
    //sobrepeso obesidade 1
    //alert(`sobrepeso ${resultado}`)

    section.style.height = '570px';
    res.innerHTML = `Seu IMC é ${resultado} <br>  <strong> Sobrepeso - obesidade nvl 1 </strong>`

}


else if(resultado >= 30 && resultado <=39.9){
    //obesidade obesidade 2
    //alert(`obesidade ${resultado}`)

    section.style.height = '570px';
    res.innerHTML = `Seu IMC é ${resultado} <br>  <strong> Obesidade - obesidade nvl 2 </strong>` 

}
else if (resultado > 40)
{
    //sobrepeso obesidade 3
    //alert(`obesidade grave ${resultado}`)

    section.style.height = '570px';
    res.innerHTML = `Seu IMC é ${resultado} <br>  <strong> Obesidade grave - obesidade nvl 3 </strong>`

}

}



