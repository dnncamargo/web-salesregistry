import { useState, useEffect } from 'react';


const Client = () => {

    const [fullNameInput, setFullnameInput] = useState('');
    const [cpfIDInput, setCPFIDInput] = useState('');
    const [cepInput, setCepInput] = useState('');
    const [AddressInput, setAddressInput] = useState('');
    const [NumberInput, setNumberInput] = useState('');
    const [ComplementInput, setComplementInput] = useState('');
    const [DistrictInput, setDistrictInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [StateInput, setStateInput] = useState('');
    const [returnedData, setReturnedData] = useState();

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
    

        // {cep:"", logradouro:"", complemento:"", bairro:"", localidade:"", uf:"", ibge:"", gia:"", ddd:"", siafi:""}
        const [client, setClient] = useState({
            fullname: '',
            cpfID: '',
            cepCode: '',
            address: '',
            number: '',
            complement: '',
            district: '',
            state: ''
            });

    const saveContent = () => {
        console.log("Saved")
    }

    const fillForm = (data) => {
        setAddressInput(data.logradouro)
        setComplementInput(data.complemento)
        setDistrictInput(data.bairro)
        setCityInput(data.localidade)
        setStateInput(data.uf)
    }

    const clrForm = () => {
        setAddressInput("")
        setComplementInput("")
        setDistrictInput("")
        setCityInput("")
        setStateInput("")
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
            const cepJson = await cepResponse.json();

            /** validação do input */
            if(cepJson.hasOwnProperty('erro')){
                alert("CEP não encontrado!")
            } else {
                fillForm(cepJson);
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

                <input type={"text"} placeholder="CEP" maxLength={8}
                    onBlur={inputCEP}></input>
                    
                    <button disabled
                    onClick={saveContent}>
                        Salvar
                    </button>
                    

                    <h2>Message: {returnedData}</h2>
                    <input className='form-control' defaultValue={AddressInput} placeholder="Endereço" type='text' maxLength={50}/>
                    <input className='form-control' defaultValue={ComplementInput} placeholder="Complemento" type='text' maxLength={50}/>
                    <input className='form-control' defaultValue={DistrictInput} placeholder="Bairro" type='text' maxLength={50}/>
                    <input className='form-control' defaultValue={cityInput} placeholder="Cidade" type='text' maxLength={50}/>
                    <input className='form-control' defaultValue={StateInput} placeholder="UF" type='text' maxLength={50}/>
                    

            </form>
        </div>
     );
}
 
export default Client;