import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos({ produtos }) {
    return (
        <>
            <ul className={styles.bloco}>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.id}</h2>
                        <p>{produto.description}</p>
                        <p>preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </>
    )
}