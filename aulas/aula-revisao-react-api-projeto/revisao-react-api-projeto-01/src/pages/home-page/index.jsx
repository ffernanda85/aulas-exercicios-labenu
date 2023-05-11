import { Header } from  '../../components/Header'
import { Login } from '../../components/Login'
import { WellCome } from '../../components/WellCome'

export function HomePage() {
    return (
        <>
            <Header/>
            <h1>Home Page</h1>
            <Login />
            <WellCome/>
        </>
    )
}