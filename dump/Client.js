import { useState, useEffect } from 'react';
import Input from '../src/components/Input';


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
    //const [fullFilled, setFullFilled] = useState(false);

    let model = {
        name: undefined,
        cpfid: undefined,
        cepCode: undefined,
        address: undefined,
        number: undefined,
        complement: undefined,
        district: undefined,
        city: undefined,
        state: undefined
    }
    
        const [client, setClient] = useState({
            nomecompleto: '',
            cpf: '',
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            localidade: '',
            uf: ''
            });

    const saveContent = () => {
        model = {
            name: fullNameInput,
            cpfid: cpfIDInput,
            cepCode: cepInput,
            address: AddressInput,
            number: NumberInput,
            complement: ComplementInput,
            district: DistrictInput,
            city: cityInput,
            state: StateInput
        }
        console.log(model)
    }

    const fillForm = (data) => {
        /** Preenche os campos do formulário */
        setAddressInput(data.logradouro)
        setComplementInput(data.complemento)
        setDistrictInput(data.bairro)
        setCityInput(data.localidade)
        setStateInput(data.uf)

        console.log(data)
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
                setCepInput(cepCode);
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
            <form>
                <h2>Novo Cliente</h2>
                <Input value={fullNameInput} placeholder="Nome Completo" maxLength={50} onChange={setFullnameInput}/>
                <Input value={cpfIDInput} placeholder="CPF" maxLength={11} onChange={setCPFIDInput}/>
                <Input value={cepInput} placeholder="CEP" maxLength={8} onBlur={inputCEP}/>

                {/* TODO: Lógica de Aparecer Conteúdo apenas quando houver informações */}
                <Input value={AddressInput} placeholder="Endereço" maxLength={50}/>
                <Input value={ComplementInput} placeholder="Complemento" maxLength={50}/>
                <Input value={DistrictInput} placeholder="Bairro" maxLength={50}/>
                <Input value={cityInput} placeholder="Cidade" maxLength={50}/>
                <Input value={StateInput} placeholder="UF" maxLength={2}/>
                <button disabled
                    onClick={saveContent}>
                        Salvar
                    </button>
                    <p>{fullNameInput}</p>
            </form>
        </div>
     );
}
 
export default Client;