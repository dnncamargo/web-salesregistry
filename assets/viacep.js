'use strict';

const limparFormulario = () => {
    document.getElementById("formulario").reset();
    console.log("Formulário limpo");
}

document.getElementById("btnLimpar").addEventListener('click', limparFormulario);


const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('complemento').value = endereco.complemento;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('numero').focus();
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    
    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if ( cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            alert("CEP não encontrado!")
        } else {
            preencherFormulario(endereco);
        }
        console.log(endereco);
    } else {
        if (cep.length == 0){
            limparFormulario();
        } else {
            alert("CEP incorreto!");
        }
    }
}

document.getElementById('cep')
        .addEventListener('change', pesquisarCep);