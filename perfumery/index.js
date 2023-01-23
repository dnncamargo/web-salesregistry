'use strict';

const searchCEP = async () => {
    const cepcode = document.getElementById('cepcode').value;
    const uri = `https://viacep.com.br/ws/${cepcode}/json/`;
    const getResponse = await fetch(uri);
    const getAddress = await getResponse.json();
    fillForm(getAddress);
};

const fillForm = (getAddress) => {
    document.getElementById('address').value = getAddress.logradouro;
    document.getElementById('compl').value = getAddress.complemento;
    document.getElementById('district').value = getAddress.bairro;
    document.getElementById('city').value = getAddress.localidade;
    document.getElementById('state').value = getAddress.uf;
}

document.getElementById('cepcode')
        .addEventListener('focusout', searchCEP);