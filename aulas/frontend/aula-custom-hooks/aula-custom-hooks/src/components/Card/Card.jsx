
import { CardContainer } from "./style";

export const Card = ({ text, backgroudColor, textColor, image }) => {
  return (
    <CardContainer backgroudColor={backgroudColor} textColor={textColor}>
      <div>
        <p>{text}</p>
        <img src={image} width='100px' alt="" />
      </div>
    </CardContainer>
  );
};