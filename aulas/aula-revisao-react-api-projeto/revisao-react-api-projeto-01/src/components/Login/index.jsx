import * as s from './styledLogin'

export const Login = () => {
    return (
        <s.Container>
            <s.StyledForm>
                <s.StyledTitle>Identifique-se para entrar no planeta rick</s.StyledTitle>
                <s.StyledLabel htmlFor='email' >E-mail</s.StyledLabel>
                <s.StyledInput id='email' name='email' onChange={""} value={"valor"} />
                <s.StyledLabel htmlFor='password'>Password</s.StyledLabel>
                <s.StyledInput id='password' name='password' onChange={""} value={"valor"} />
                <s.StyledLink>Fazer Cadastro</s.StyledLink>
                <s.StyledBtn>Login</s.StyledBtn>
            </s.StyledForm>
        </s.Container>
    )
}