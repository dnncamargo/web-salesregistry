import { useState } from 'react';

const Client = () => {

    const [returnedData, setReturnedData] = useState('');
    const [client, setClient] = useState({
        nomecompleto: '',
        cpf: '',
        cep: '',
        numero: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        email: '',
        telefone: '',
        nascimento: ''
        })

    const model = {
        name: "",
        cpfid: undefined,
        cepCode: undefined,
        address: undefined,
        number: undefined,
        complement: undefined,
        district: undefined,
        state: undefined
    }
    
    const saveContent = () => {
        console.log("Saved")
    }

    const fillForm = (data) => {
        console.log(data);
        const {name, value} = data;
        setClient(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const clrForm = () => {
        // setAddressInput("")
        // setComplementInput("")
        // setDistrictInput("")
        // setCityInput("")
        // setStateInput("")
        console.log("Formulário limpo");
    }

    const validCepCode = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep); 

    /** TODO: Validar CEP */
    const inputCEP = async (e) => {
        let cepCode = e.target.value;
        //alert(newValue);
        //setCepInput(newValue);

        if ( validCepCode(cepCode)) {
            const url = `https://viacep.com.br/ws/${cepCode}/json/`;
            const cepResponse = await fetch(url)
            const data = await cepResponse.json();

            /** validação do input */
            if(data.hasOwnProperty('erro')){
                alert("CEP não encontrado!")
            } else {
                console.log(data);
                setClient(prevState => ({
                    ...prevState,
                    cep : cepCode
                }))
                fillForm(data);
                console.log(client)
            }
        } else {
            if (cepCode.length === 0){
                clrForm();
            } else {
                alert("CEP incorreto!");
            }
        }
            //.then(data => setReturnedData(data));
        //setCepInput(cepResponse[0]);
    }  

    return ( 
        <div className="container">
            <form className="FormInput">
                <h2>Novo Cliente</h2>
                <input type={"text"} name="nomecompleto" placeholder="Nome Completo" maxLength={255}></input>
                <input type={"text"} name="cpf" placeholder="CPF" maxLength={11}></input>
                <input type={"text"} name="cep" placeholder="CEP" maxLength={8}
                    onBlur={inputCEP}></input>
                    
                    <button disabled
                    onClick={saveContent}>
                        Salvar
                    </button>
                    

                    {/* <h2>Message: {returnedData}</h2> */}
                    <input className='form-control' name="logradouro" defaultValue={client.logradouro} placeholder="Endereço" type='text' maxLength={50}/>
                    <input className='form-control' name="complemento" defaultValue={client.complemento} placeholder="Complemento" type='text' maxLength={50}/>
                    <input className='form-control' name="bairro" defaultValue={client.bairro} placeholder="Bairro" type='text' maxLength={50}/>
                    <input className='form-control' name="localidade" defaultValue={client.localidade} placeholder="Cidade" type='text' maxLength={50}/>
                    <input className='form-control' name="uf" defaultValue={client.uf} placeholder="UF" type='text' maxLength={50}/>
                    

            </form>
            {/* <p>{client}</p> */}
        </div>
     );
}
 
export default Client;