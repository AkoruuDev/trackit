import logo from "../../images/logo.png";

export default function Registration() {
    return (
        <div>
            <div>
                <img src={logo} alt="logotipo" />
                <h1>TrackIt</h1>
                <form>
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="senha" />
                    <input type="name" placeholder="nome" />
                    <input type="picture" placeholder="foto" />
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Já tem uma conta? Faça login!</p>
            </div>
        </div>
    )
}