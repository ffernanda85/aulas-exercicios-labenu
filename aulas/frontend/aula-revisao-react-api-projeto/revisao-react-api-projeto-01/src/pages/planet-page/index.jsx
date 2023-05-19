import { Header } from  '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'

export function PlanetPage() {
    useProtectedPage()

    return (
        <>
            <Header/>
            <h1>Planet Page</h1>
        </>
    )
}