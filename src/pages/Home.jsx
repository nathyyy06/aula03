
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
            <Loading></Loading>
        )
    }

    return(
        <>
        <h1>Crystal 💎</h1>
        <ListaProdutos produtos={lista} />
    </>

)}
