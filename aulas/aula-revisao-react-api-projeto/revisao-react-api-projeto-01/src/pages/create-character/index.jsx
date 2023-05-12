import { Header } from  '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'

export function CreateCharacterPage() {
    useProtectedPage()
    return (
        <>
            <Header/>
            <h1>Create Character Page</h1>
        </>
    )
}