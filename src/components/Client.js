import React, {useState, useRef} from 'react';

const Client = () => {
    const inputRefNumber = useRef(null);
    const [returnedData, setReturnedData] = useState('');
    const [client, setClient] = useState({
        nomecompleto: '',
        cpf: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        localidade: '',
        uf: '',
        bairro: ''
        });

    const setInput = (c) => {
        const {name, value} = c.target;
        //console.log(value);
        // Filtragem de tipo: 'name' deve corresponder ao campo da tabela
        setClient(prevState => ({
            ...prevState,
            [name] : value
            /** os demais campos receberão o valor de string normalmente */
        }));
        
    }
    const validCepCode = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep); 

    /** TODO: Validar CEP */
    const setInputCEP = async (e) => {
        let cepCode = e.target.value;
        //console.log(cepCode)
        //alert(newValue);
        //setCepInput(newValue);

        if ( validCepCode(cepCode)) {
            const url = `https://viacep.com.br/ws/${cepCode}/json/`;
            const cepResponse = await fetch(url)
            const cepJson = await cepResponse.json();

            /** validação do input */
            if(cepJson.hasOwnProperty('erro')){
                alert("CEP não encontrado!")
            } else {
                setClient(prevState => ({
                    ...prevState,
                    cep : cepCode
                }))}
                fillForm(cepJson);
            
        } else {
            if (cepCode.length === 0){
                //clrForm();
            } else {
                alert("CEP incorreto!");
            }
        }
    }

    const fillForm = (data) => {
        /** Preenche os campos do formulário */

        setClient(prevState => ({
            ...prevState,
            logradouro : data.logradouro,
            complemento : data.complemento,
            bairro : data.bairro,
            localidade : data.localidade,
            uf : data.uf
        }))
        inputRefNumber.current.focus();
    }
 
    
    const createClient = async() => {
        console.log("novo cliente", client);
        await fetch('/create', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...client
            })
        })
        .then(res => res.json());
        setReturnedData(client);       
        //console.log(newData);
    }
    

    return (
        <div className='container'>

            <input 
                name="nomecompleto" 
                placeholder="Nome Completo" 
                defaultValue={client.nomecompleto} 
                onChange={setInput}></input>
            <input 
                name="cpf" 
                placeholder="CPF"
                defaultValue={client.cpf}
                onChange={setInput}></input>
            <input 
                name="cep" 
                placeholder="CEP" 
                defaultValue={client.cep}
                onBlur={setInputCEP}></input>
            <input 
                name="logradouro" 
                placeholder="Endereço" 
                defaultValue={client.logradouro} 
                onChange={setInput}></input> 
            <input 
                name="numero" 
                placeholder="Número" 
                defaultValue={client.numero} 
                onChange={setInput}
                ref={inputRefNumber}></input> 
            <input 
                name="complemento" 
                placeholder="Complemento" 
                defaultValue={client.complemento} 
                onChange={setInput}></input> 
            <input 
                name="bairro" 
                placeholder="Bairro" 
                defaultValue={client.bairro} 
                onChange={setInput}></input>  
            <input 
                name="localidade" 
                placeholder="Cidade" 
                defaultValue={client.localidade} 
                onChange={setInput}></input>
            <input 
                name="uf" 
                placeholder="Estado" 
                defaultValue={client.uf} 
                onChange={setInput}></input>

            <button onClick={ 
                () => createClient() }>
                Salvar
            </button>
            {/* <button onClick={ 
                () => fetchData() }>
                Buscar
            </button> */}
            
            
            <p>Nome Completo : {returnedData.nomecompleto}</p>
            <p>CPF : {returnedData.cpf}</p>
            <p>CEP : {returnedData.cep}</p>
            <p>Endereço : {returnedData.logradouro}</p>
            <p>Número : {returnedData.numero}</p>
            <p>Bairro : {returnedData.bairro}</p>
            <p>Cidade : {returnedData.localidade}</p>
            <p>Estado : {returnedData.uf}</p>

        </div>
    )
}
 
export default Client;