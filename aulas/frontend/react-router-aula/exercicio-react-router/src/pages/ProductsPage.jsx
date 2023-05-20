import { useParams } from "react-router-dom";
import { Header } from "../components/Header"

function ProductsPage() {
    const params = useParams()

    return (
        <section>
            <h1>Página de produtos</h1>
            <Header />

            {params.id === "01" ?
                <>
                    <h3>Produto 01</h3>
                    <img src="https://uploaddeimagens.com.br/images/004/351/121/thumb/1.jpg?1676179448" />
                </>
                :
                <>
                    <h3>Produto 02</h3>
                    <img src="https://uploaddeimagens.com.br/images/004/351/124/thumb/4.jpg?1676179480" />
                </>
            }

        </section>
    );
}

export default ProductsPage;