import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from "./components/Card"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

function App() {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleCardClick = (productId) => {
        setSelectedProductId(productId);
    }

    return (
        <Container>
            {products.map(product => (
                <Card
                    key={product.id}
                    product={product}
                    handleCardClick={handleCardClick}
                    isSelected={product.id === selectedProductId}
                />
            ))}
        </Container>
    );
}

export default App;
