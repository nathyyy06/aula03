import {useEffect, useState} from "react";

export default function App() {
    const [lista,setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/product');
                const dados = await resposta.json();
                setLista(dados);
            }catch{
                alert('Ocorreu um erro na comunicação com o servodor!');
            }
        }
        receberListaProdutos();
    },[])

    return(
        <>
        <h1>lista de produtos</h1>
        <ul>
            {produtos.map( produto =>(
                <li key={produto.id}>
                  <h2>{produto.id}</h2>  
                  <p>{produto.description}</p>
                  <p>preço: R${produto.price}</p>
                  <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
        </ul>
        </>
    )
}