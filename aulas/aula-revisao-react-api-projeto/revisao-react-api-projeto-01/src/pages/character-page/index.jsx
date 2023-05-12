import { Header } from  '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'

export function CharacterPage() {
    useProtectedPage()
    
    return (
        <>
            <Header/>
            <h1>Character Page</h1>
        </>
    )
}