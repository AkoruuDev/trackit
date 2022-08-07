import { useContext } from "react";
import styled from "styled-components"
import { AuthContext } from "./provider/auth";
let imageProfile = "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000";

export default function Header() {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <MainHeader>
            <Content>
                <Title>TrackIt</Title>
                <Profile src={imageProfile} alt="profile" />
            </Content>
        </MainHeader>
    )
}

const MainHeader = styled.header`
    width: 100vw;
    padding: 20px;
    background-color: blue;
    box-shadow: 0 4px 40px 4px gray;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 0;
    top: 0;
`;

const Content = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 38px;
`;

const Profile = styled.img`
    width: 51px;
    height: 51px;
    background-color: #FFFFFF;
    border-radius: 50%;
`;