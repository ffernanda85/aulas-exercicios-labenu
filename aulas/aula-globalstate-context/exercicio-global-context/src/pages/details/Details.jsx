import { useNavigate, useParams } from "react-router-dom"
import * as s from "./styledDetails"
import { goToHomePage } from "../../router/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { users } = context

    const filter = users.filter((user) => user.id === params.id)

    return (
        <s.ContainerDetails>
            <h1>Details Usuário</h1>
            <div>
                {
                    filter.map((item) =>

                        <s.CardDetails key={item.id} >
                            <div>
                                <h2>Nome Usuário: </h2>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <h2>Id usuário:</h2>
                                <p> {item.id} </p>
                            </div>
                        </s.CardDetails>
                    )
                }
            </div>
            <s.BtnToGoHome onClick={() => goToHomePage(navigate)} >Home</s.BtnToGoHome>
        </s.ContainerDetails>
    )
}