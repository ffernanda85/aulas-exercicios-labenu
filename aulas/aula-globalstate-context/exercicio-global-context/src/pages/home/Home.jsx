import React, { useContext } from "react"
import Card from "../../components/card/Card"
import { GlobalContext } from "../../contexts/GlobalContext"
import * as s from "./styleHome"


export const Home = () => {
    const context = useContext(GlobalContext)
    const { users } = context

    return (
        <s.ContainerHome>
            <h1>HOME PAGE</h1>
            <s.BoxCard>
                {
                    users.map(item =>
                        <Card
                            key={item.id}
                            name={item.name}
                            id={item.id}
                        />
                    )
                }
            </s.BoxCard>
        </s.ContainerHome>
    )
}

