import styled from "styled-components"

export default function Footer() {
    return (
        <MainFooter>
            <Content>
                <MenuText>Hábitos</MenuText>
                <Today>Hoje</Today>
                <MenuText>Histórico</MenuText>
            </Content>
        </MainFooter>
    )
}

const MainFooter = styled.footer`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 1;
    bottom: 0;
`;

const Content = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const MenuText = styled.p`
    font-size: 23px;
    color: #52B6FF;
`;

const Today = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    position: absolute;
    left: calc(50% - 45px);
    bottom: 8px;
`;