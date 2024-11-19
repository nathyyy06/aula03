
import {useEffect, useState} from "react";
import ListaProdutos from "./ListaProdutos";
import Loading from "./Loading";

export default function App() {
    const [lista,setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            }catch{
                alert('Ocorreu um erro na comunicação com o servodor!');
            }
        }
        receberListaProdutos();
    },[])

    if (lista.length == 0) {
        return (
            <h1>Carregando...</h1>,
            <Loading></Loading>
        )
    }

    const orderAz = () =>{
      const listaAux = [...lista].sort((a,b) => a.title.localeCompare(b.title));
      setLista(listaAux);
    }

    const orderZa = () =>{ 
        const listaAux = [...lista].sort((a,b) => b.title.localeCompare(a.title));
        
        setLista(listaAux);
    }

    const orderPrecoCrescente = () => {
        const listaAux = [...lista].sort((a, b) => a.price - b.price);
        setLista(listaAux);
    }

    const orderPrecoDecrescente = () => {
        const listaAux = [...lista].sort((a, b) => b.price - a.price);
        setLista(listaAux);
    }
    
    return(
        <>       
        <h1>L.K.Bennett </h1>
        <button onClick={()=> orderAz()}>Az</button>
        <button onClick={()=> orderZa()}>Za</button>
        <button onClick={orderPrecoCrescente}>Preço: Menor para Maior</button>
        <button onClick={orderPrecoDecrescente}>Preço: Maior para Menor</button>
        <ListaProdutos produtos={lista} />
    </>

)}
