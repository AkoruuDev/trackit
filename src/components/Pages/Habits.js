import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

export default function Habits() {
    return (
        <MainHabits>
            <Header />
            <Content>
                <TextBox>
                    <Title>Meus Habitos</Title>
                    <Button>+</Button>
                </TextBox>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Content>
            <Footer />
        </MainHabits>
    )
}

const MainHabits = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Content = styled.div`
    width: 80vw;
    height: 100vh;
    padding-top: 150px;
`;

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    padding-bottom: 20px;
    font-size: 23px;
    color: #126BA5;
`;

const Button = styled.div`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 33px;
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

const Text = styled.p`
    margin-top: 25px;
    color: #666666;
    font-size: 18px;
`;