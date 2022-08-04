import styled from "styled-components"

export default function Header() {
    return (
        <MainHeader>
            <Content>
                <Title>TrackIt</Title>
                <Profile src="" alt="profile" />
            </Content>
        </MainHeader>
    )
}

const MainHeader = styled.header`
    width: 100vw;
    heigth: 0px;
    padding: 20px;
    background-color: blue;
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