
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

    return(
        <>
        <h1>Crystal 💎</h1>
        <button onClick={()=> orderAz()}>Az</button>
        <button onClick={()=> orderZa()}>Za</button>
        <ListaProdutos produtos={lista} />
    </>

)}
