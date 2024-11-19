import styles from '../styles/listaProdutos.module.css';

export default function ListaProdutos({ produtos }) {
    return (
        <div className={styles.container}>
            {produtos.map(produto => (
                <div key={produto.id} className={styles.produto}>
                    <img src={produto.image} alt={produto.title} className={styles.imagem} />
                    <div className={styles.info}>
                        <h3 className={styles.titulo}>{produto.title}</h3>
                        <p className={styles.descricao}>{produto.description}</p>
                        <p className={styles.preco}>Preço: R${produto.price.toFixed(2)}</p>
                        <button className={styles.botao}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            ))}
        </div>
    )
}