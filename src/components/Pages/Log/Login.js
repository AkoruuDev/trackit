import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../../images/logo.png"
import { doLogin } from "../../services/trackit";

export default function Login() {
    const [login, setLogin] = useState([]);
    const [enviate, setEnviate] = useState(false);
    const navigate = useNavigate()

    function makeLogin({ value, name }) {
        setLogin({
          ...login,
          [name]: value,
        });
    }
    
    useEffect(() => {
        if(enviate) {
            doLogin(login)
            .then(res => {
                console.log(res.data);
                navigate('/hoje')
            })
            .catch(() => {
                alert('Login ou senha incorretos, tente novamente')
                window.location.reload();
                navigate('/')
            });
        }
    }, [enviate])

    return (
        <MainLogin>
            <Content>
                <Image src={logo} alt="logotipo" />
                <Title>TrackIt</Title>
                <Input type="email" name="email" onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    } 
                placeholder="e-mail" />
                <Input type="password" name="password" onChange=
                    {(e) => makeLogin({
                            name: e.target.name,
                            value: e.target.value
                        })
                    } 
                placeholder="senha" />
                <Button onClick={() => setEnviate(true)}>Entrar</Button>

                <Link to="/cadastro">
                    <Register>Não tem uma conta? Cadastre-se!</Register>
                </Link>
            </Content>
        </MainLogin>
    )
}

const MainLogin = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
`;

const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 170px;
`;

const Title = styled.h1`
    padding-bottom: 20px;
    font-family: 'Playball', cursive;
    font-size: 70px;
    color: #126BA5;
`;

const Input = styled.input`
    width: 80vw;
    height: 45px;
    margin: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: #D4D4D4 solid 1px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #D4D4D4;

    &&:hover {
        background-color: #F1F1F1;
    }
`;

const Button = styled.div`
    width: 80vw;
    height: 45px;
    margin: 6px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    &&:hover {
        cursor: pointer;
        background-color: #52C6FF;
        box-shadow: 0 1px 4px 1px gray;
        color: black;
    }
`;

const Register = styled.p`
    margin-top: 25px;
    color: #52B6FF;
    font-size: 18px;
    text-decoration: underline;
    font-style: oblique;

    &&:hover {
        cursor: pointer;
        color: #52C6FF;
    }
`;