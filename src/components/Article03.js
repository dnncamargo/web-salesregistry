
import React, { useState } from 'react';
 
function Article03() {
 
  const [shopCart, setShopCart] = useState({item1:"Juice", item2:"Icrecream"});

const handleClick = (item_id,e) => {
  let copiedShopCart = {...shopCart};
  delete copiedShopCart[item_id];
  setShopCart( shopCart => ({
      ...copiedShopCart
    }));
  console.log(shopCart);
}
 
  return (
    <div className="App">
      <h3>useState with object in React Hooks - <a href="https://www.logrocket.com">LogRocket</a></h3>
      <br/>
      1.{shopCart.item1}
      <button onClick={(e) => handleClick("item1",e)}>delete</button>
      <br/>
      <br/>
      {shopCart.item2}
      <button onClick={(e) => handleClick("item2",e)}>delete</button>
      <pre>{JSON.stringify(shopCart, null, 2)}</pre>
    </div>
  );
}
 
export default Article03;

// import { useState, useEffect } from 'react';

// const Article03 = () => {

//     const [person, setPerson] = useState(null);
//     const [inputCEP, setInputCEP] = useState('')

    
//     useEffect((cepCode) => {
//         const url = `https://viacep.com.br/ws/${cepCode}/json/`;
//         fetch(url)
//         .then(res => {return res.json()})
//         .then(data => setPerson(data))
//     },[])

//     return ( 
//         <div className="container">
//             <input type={"text"} placeholder="CEP" maxLength={8}
//                     onBlur={inputCEP}></input>
                    
//         </div>
//      );
// }
 
// export default Article03;