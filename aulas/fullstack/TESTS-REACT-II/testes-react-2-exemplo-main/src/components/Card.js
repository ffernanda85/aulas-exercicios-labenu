import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ${props => props.isSelected && `
    color: orangered;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

function Card({
    product,
    handleCardClick,
    isSelected
}) {
    return (
        <Container key={product.id} onClick={() => handleCardClick(product.id)} isSelected={isSelected}>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>${product.price.toFixed(2)}</Price>
        </Container>
    );
}

export default Card;
