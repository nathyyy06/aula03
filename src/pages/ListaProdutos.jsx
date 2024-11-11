import styles from '../styles/listaProdutos.module.css'
export default function ListaProdutos({ produtos }) {
    return (
        <div className={styles.container}>
            {produtos.map(produto => (
                <div key={produto.id} className={styles.produto}>
                    <img src={produto.image} alt={produto.title} />
                    <div className={styles.info}>
                        <h3>{produto.title}</h3>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}