import styled from "styled-components"
import logo from "../../images/logo.png"

export default function Login() {
    return (
        <div>
            <div>
                <img src={logo} alt="logotipo" />
                <h1>TrackIt</h1>
                <input type="name" placeholder="e-mail" />
                <input type="password" placeholder="senha" />
                <div>Entrar</div>
                <p>Não tem uma conta? Cadastre-se!</p>
            </div>
        </div>
    )
}