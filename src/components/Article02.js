import {useState} from 'react'

const Article02 = () => {

    const [title, setTitle] = useState("Zelda");

    const changeTitle = () => {
        setTitle("Sheik");
        console.log(title);
    }

    let name = "yoshi";

    const changeName = () => {
        name = "koopa";
        console.log(name);
    }

    const inputChangeName = (e) => {
        const newValue = e.target.value;
        console.log(newValue);
        setTitle(newValue)
    }
    return ( 
    <div className="container">
        <h2>Use State</h2>
        <p>Quando queremos manipular valores, usamos variáveis em nosso código, mas no componente temos uma forma de manipular valores através de uma função no React chamada Hooks.</p>
        <p>Quando falamos de um estado de um componente, estamos falando dos valores envolvidos neste componente, como números, textos, booleanos, arrays, etc. Que possuem valores atribuídos dinamicamente e podem ser modificados com algum evento. Por exemplo:</p>
        <p>Vamos começar com uma variável let name = "yoshi"</p>
        <p>Se temos na nossa página um botão</p>
        <br/><p className="code">&lt;button onClick&#61;&#123;changeName&#125;&gt;Click me&lt;/button&gt;</p>
        <br/><p>Que invoca a seguinte função:</p><br/>
        <p className="code">const changeName &#61; &#40;&#41; &#61;&#62; &#123;</p>
        <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = 'koopa'</p>
        <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;name&#41;</p>
        <p className="code">&#125;</p><br/>
        <br/><p>E queremos exibir esta mudança na página exibindo a variável numa tag &lt;p&gt; desta forma:</p>
        <br/><p>&lt;p&gt;&#123;&nbsp;&nbsp;name&nbsp;&nbsp;&#125;&lt;&frasl;p&gt;</p>
        <button onClick={changeName}>Click me, but it will not change</button><br/>
        <br/><p>Veja no console do navegador, e irá ver que a variável name recebe o novo valor. O que acontece é que o React não renderizou esta mudança porque esta variável não está "Reativa".</p>
        <br/><h5>Para isto usamos o Hooks useState!</h5>
        <p>Ele serve para avisar ao React para renderizar elementos que mudaram de valor, para assim atualizar a mudança e vermos o novo valor sendo exibido na página. Para isto inserimos no início do código:</p>
        <br/><p>import &#123; useState &#125; from 'react'</p>
        <br/><p>Isto dirá ao React para carregar a biblioteca do Hooks que possui uma função que iremos usar agora.
        Chamamos useState() e inserimos o novo valor como parâmetro, mas para armazenar este valor, nós atribuimos a um array, onde o primeiro elemento é a variável a ser modificada e uma função que será invocada para modificar o valor da variável.</p>
        <br/><p>Faremos agora, const [title, setTitle] = setState("Zelda");</p>
        <br/><p>E criamos a seguinte função:</p><br/>
        <p className="code">const changeTitle &#61; &#40;&#41; &#61;&#62; &#123;</p>
        <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTitle('Sheik');</p>
        <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;title&#41;</p>
        <p className="code">&#125;</p><br/>
        <br/><p>E quando exibimos esta variável na página:</p>
        <br/><p>&lt;p&gt;&#123;&nbsp;&nbsp;title&nbsp;&nbsp;&#125;&lt;&frasl;p&gt;</p>
        <br/><p>O nosso novo botão</p><br/><p className="code">&lt;button onClick&#61;&#123;changeTitle&#125;&gt;Click me&lt;/button&gt;</p><br/>
        <button onClick={changeTitle}>Click me, and i will certaily change</button><br/><br/>
        {title}
        <br/><p>Mas o valor "Zelda" nos parâmetros de setState é apenas um valor inicial definido, podemos usar a função setTitle a qualquer momento para atribuir outro valor e renderizá-lo na tela. Inclusive, pode ser números, um array, um objeto, etc.</p>
        <h2>Controlled input fields</h2>
        <input type={"text"} placeholder="Digite algo"
        onChange={inputChangeName}></input>
        <p>Agora a variável Title recebeu um novo valor digitado a partir do campo usando a propriedade onChange&#61;&#123;&#125;. Desta forma a cada mudança do input, a função setTitle é chamada e o valor é renderizado na tela.</p>
        <input
            onFocus={(e) => {
                console.log('Focused on input');
            }}
            placeholder="onFocus is triggered when you click this input."
            />
        <input
            onBlur={(e) => {
                console.log('Triggered because this input lost focus');
            }}
            placeholder="onBlur is triggered when you click this input and then you click outside of it."
            />
    </div> );
}
 
export default Article02;