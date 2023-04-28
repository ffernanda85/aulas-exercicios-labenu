import { useNavigate } from "react-router-dom";
import * as s from "./styledCard"
import { goToDetailsPage } from "../../router/coordinator"

export default function Card({ name, id }) {
    const navigate = useNavigate

    return (
       
        <s.Container>
            <p>{ name }</p>
            <button onClick={() => goToDetailsPage(navigate) } >Details</button>
        </s.Container>
    );
}