import { Heading } from "./styledHeader"

export function Header() {
    return (
        <Heading>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Heading>
    )
}