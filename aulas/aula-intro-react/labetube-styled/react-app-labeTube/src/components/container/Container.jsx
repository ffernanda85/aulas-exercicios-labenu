import { FullScreen } from "./styledContainer"
import { Header } from "../header/Header"
import { Main } from "../main/Main"
import { Footer } from "../footer/Footer"

export function Container() {
    return (
        <FullScreen>
            <Header />
            <Main />
            <Footer/>
        </FullScreen>
    )
}