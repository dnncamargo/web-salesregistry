import invokefunctionrender from "../assets/img/console-invokefunctionrender.png";
import consoleeventclick from "../assets/img/console-eventclick.png";

const Article01 = () => {

    const handleClickFunction = (value) => {
        console.log(value, "Its my learning process")
        const date = new Date().toLocaleString();
        console.log("And it's", date);
    }

    const handleClick = () => {
        console.log("Hello World!")
    }

    const handleClickEvent = (e) => {
        console.log(e);
    }
    return ( 
        <div className="container">
            <h2>Eventos de Cliques</h2>
            <p>O elemento botão abaixo</p>
            <button>Click me</button><br/><br/>
            <p>Foi criado com a tag html</p><br/><p className="code">&lt;button&gt;Click me&lt;/button&gt;</p><br/>
            <p>Mas não possui nenhuma interação associada a ele, para fazermos isto, precisamos invocar o evento onClick &#61;&#123;&#125; que receberá um valor dinâmico dentro dos colchetes. Então passamos a referência de uma função.</p><br/>
            <p className="code">&lt;button onClick&#61;&#123;handleClick&#125;&gt;Click me&lt;/button&gt;</p><br/>
            <p>E cada vez que o botão for clicado, invocará a função função const handleClick.</p><br/>
            <p className="code">const handleClick &#61; &#40;&#41; &#61;&#62; &#123;</p>
            <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;"Hello world"&#41;</p>
            <p className="code">&#125;</p><br/>
            <button onClick={handleClick}>Click me again</button><br/>
            <br/><p>Mas quando usamos parêntesis na referência da função, o que fazemos é invocá-la toda vez que o componente é renderizado, o que faz com que mostre no console:</p><br/>
            <img alt= "Resposta do console.log invocada duas vezes" src={invokefunctionrender} /><br/>
            <p>Não queremos isso! Queremos que a função seja chamada apenas quando o usuário clicar nela. Por isso apenas usamos a referência da função. É assim que criamos uma função para atribuir algum elemento quando usamos uma interação por cliques.</p>
            <p>Mas se quisermos interagir com valores, enviar o conteúdo de algum formulário ou criar um botão interativo que armazene números de Likes??</p>
            <p>O que fazemos é usar a propriedade onClick=&#123;&#125; invocando dentro dos colchetes uma função que recebe um parâmetro, como em </p>
            <br/><p>onClick=&#123;handleClickFunction(valor)&#125;</p>
            <br/><p>E invocá-la envolvida em uma função anônima, desta forma:</p>
            <br/><p className="code">&lt;button onClick&#61;&#123;&#40;&#41; &#61;&#62; handleClickFunction&#40;valor&#41;&#125;&gt;Click me too&lt;/button&gt;</p>
            <br/><p>Dentro dos parêntesis da função handleClickFunction() podemos adicionar um valor que será recebido quando a função for invocada.</p>
            <p>Vamos testar o parâmetro com uma string "Hello World":</p>
            <br/><p>onClick=&#123;handleClickFunction("Hello World")&#125;</p>
            <br/><p>Neste exemplo a função não será invocada automaticamente, pois está envelopada em uma função anônima. Apenas quando clicamos no botão, disparamos o evento que invoca a função handleClickFunction.</p>
            <br/><p className="code">const handleClickFunction&#40;valor&#41; &#61; &#40;&#41; &#61;&#62; &#123;</p>
            <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;valor, "It's my learning process"&#41;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const date = new Date().toLocaleString();</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("And it's", date);</p>
            <p className="code">&#125;</p><br/>
            <button onClick={() => handleClickFunction("Hello World")}>Click me too</button><br/>
            <br/><p>Funções possuem o escopo circundado com colchetes, mas os colchetes em onClick=&#123;&#125; são referências para valores dinâmicos. Ainda assim, usamos colchetes, o externo para os valores dinâmicos e o interno para o escopo da função quando este possui mais de uma linha.</p>
            <br/><p className="code">&lt;button onClick&#61;&#123;&#40;&#41; &#61;&#62; &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;"Hello World"&#41;&#125;</p>
            <p>&#125;&gt;Click me too&lt;/button&gt;</p>
            <br/><p>A propriedade onClick também dispara o evento que pode ser acessado automaticamente pelo parâmetro pela função invocada. Assim, mesmo na função:</p>
            <br/><p className="code">&lt;button onClick&#61;&#123;handleClick&#125;&gt;Click me&lt;/button&gt;</p><br/>
            <br/><p>Podemos invocar a função handleClick(e), da forma:</p>
            <br/><p className="code">const handleClick &#61; &#40;e&#41; &#61;&#62; &#123;</p>
            <p className="code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log&#40;e&#41;</p>
            <p className="code">&#125;</p><br/>
            <br/><p>E teremos acesso ao objeto do Evento disparado com todas as suas propriedades e valores.</p>
            <br/><button onClick={handleClickEvent}>Click me one more time, please</button><br/>
            <br/><img alt= "Resposta do Event no console.log" src={consoleeventclick} /><br/>
            
        </div>
     );
}
 
export default Article01;


// &#123; {
// &#125; }
// &#40; (
// &#41;  )
// &#61; =
// &#62; >