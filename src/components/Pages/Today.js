import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

export default function Today() {
    return (
        <MainToday>
            <Header />
            <Content>
            </Content>
            <Footer />
        </MainToday>
    )
}

const MainToday = styled.div`
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