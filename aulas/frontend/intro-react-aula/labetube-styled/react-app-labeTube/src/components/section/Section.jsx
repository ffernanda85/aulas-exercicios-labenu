import { CardVideo } from "../cardvideo/CardVideo";
import { Content } from "./styledSection";

export function Section(props) {
    return (
        <Content>
            <CardVideo video1={props.video1} nome="Izabela" />
            <CardVideo video1={props.video2} nome="Alves" />
            <CardVideo video1={props.video3} nome="Rodrigues" />
            <CardVideo video1={props.video4} nome="Silva" />
            <CardVideo video1={props.video5} nome="Flávia" />
            <CardVideo video1={props.video6} nome="Fernanda" />
            <CardVideo video1={props.video7} nome="Almeida" />
            <CardVideo video1={props.video8} nome="Santos" />
        </Content>
    )
}