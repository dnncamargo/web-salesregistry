import { useState } from "react";

const Config = () => {

    const [sqlLocalDB, setSqlLocalDB] = useState({
        server: '',
        instancename: '',
        database: '',
        user: '',
        password: '',
        port: ''
        })

    const setInput = (input) => {
        const {name, value} = input.target;
        setSqlLocalDB(prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log(sqlLocalDB)
    }

    return ( 
        <div className="container">
            <input 
                type="text" 
                name="server" 
                placeholder="Servidor" 
                onChange={setInput}></input>
            <input 
                name="instancename" 
                placeholder="instância" 
                onChange={setInput}></input>
            <input 
                name="database" 
                placeholder="Base de Dados" 
                onChange={setInput}></input>
            <input 
                name="user" 
                placeholder="Usuário" 
                onChange={setInput}></input>
            <input 
                name="password" 
                placeholder="Senha" 
                onChange={setInput}></input>
            <input 
                name="port" 
                placeholder="Porta" 
                onChange={setInput}></input>
            <button 
            // onClick={ 
            //     () => createClient() }
                >
                Salvar
            </button>
        </div>
     );
}
 
export default Config;