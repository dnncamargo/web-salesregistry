import { useState, useEffect } from 'react';



const Create = () => {

    const [cepInput, setCepInput] = useState('');
    
    const num = (numero) => /^[0-9]+$/.test(numero);
    const handleCEP = (event) => {
        
        const cepinput = event.target.value
        console.log(cepinput)
        let cep = (cepinput) => {
            cep.length === 8 && 
            /^[0-9]+$/.test(cepinput)
        }
        console.log(cep)
        setCepInput(cep)
    };
    
    useEffect = (() => {
        console.log(cepInput);
    })
        

    return ( 
        <form className="container">
            <h2>Novo Cliente</h2>

                <input className='form-control' placeholder="Nome Completo" type='text' maxLength={50}/>
                <input className='form-control' placeholder="CPF" type='text' maxLength={13}/>
                <input className='form-control' placeholder="CEP" type="text" maxLength={8}
                
                onBlur={handleCEP}/>
                
                <button>
                    Salvar
                </button>

                <h2>Message: {cepInput}</h2>

        </form>
     );
}
 
export default Create;