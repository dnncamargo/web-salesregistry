import React, {useState, useEffect} from 'react';
import Input from './Input';

const Form = () => {

    //Valores do input do Cliente
    const [client, setClient] = useState({
        fullname: '',
        cpfID: '',
        cepcode: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        state: ''
        });
    
    const [cep, setCEP] = useState("");


    const setCEPcode = (c) => {
        console.log("trigger")
        setCEP(c);
    }

    useEffect(()=>{
        /*
        Query logic
        */
        console.log('i fire once');
        console.log(cep);
    });

    /** Este método retorna uma Promise */
    const fetchCEP = (e) => {
        console.log(e.target.value)
    }

    const connectToBack = async () => {
        const answ = await fetch('/create')
        // , {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log("Resposta do API Form")
    }
  
    return (
        <form className="container d-flex justify-content-center align-items-center">
            <Input label={"Nome Completo"}  type={"text"}   maxlen={50}   req={false}/>
            <Input label={"CPF"}            type={"number"} maxlen={11}   req={false}/>
            <Input label={"CEP"}            type={"number"} maxlen={8}    req={false}/>
            <button
                onClick={() => {
                    fetchCEP()}
                }>
                Pesquisar CEP
            </button>
            <Input label={"Endereço"}       type={"text"}   maxlen={100}  req={false}/>
            <Input label={"Número"}         type={"text"}   maxlen={10}   req={false}/>
            <Input label={"Complemento"}    type={"text"}   maxlen={50}   req={false}/>
            <Input label={"Bairro"}         type={"text"}   maxlen={50}   req={false}/>
            <Input label={"UF"}             type={"text"}   maxlen={2}    req={false}/>

            <button
                onClick={() => connectToBack()}
                >Salvar</button>
            
        </form>
        )
}

export default Form;