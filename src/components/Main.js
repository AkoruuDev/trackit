import styled from "styled-components";

export default function Main({ children }) {
    return (
        <MainMain>{ children }</MainMain>
    )
}

const MainMain = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`;