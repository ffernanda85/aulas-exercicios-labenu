import * as s from './styledHeader'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Header = () => {
    return (
        <s.HeaderContainer>
            <Button colorScheme='teal' variant='solid'>
                Cookenu
            </Button>
            <Button colorScheme='teal' variant='solid'>
                Login
            </Button>
        </s.HeaderContainer>
    )
}