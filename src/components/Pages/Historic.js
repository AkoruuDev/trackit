import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

export default function Historic() {
    return (
        <MainHistoric>
            <Header />
            <Content>
            </Content>
            <Footer />
        </MainHistoric>
    )
}

const MainHistoric = styled.div`
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