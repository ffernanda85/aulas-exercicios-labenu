import { Header } from  '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'

export function InstructionPage() {
    useProtectedPage()

    return (
        <>
            <Header/>
            <h1>Instruction Page</h1>
        </>
    )
}