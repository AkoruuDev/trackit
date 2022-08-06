import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import Main from "./Main";

import Login from "./Pages/Log/Login";
import Registration from "./Pages/Log/Registration";
import Habits from "./Pages/Habits/Habits";
import Today from "./Pages/Today";
import Historic from "./Pages/Historic";

export default function App() {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Main>
                    <Routes>
                        <Route path="/" element={ <Login /> } />
                        <Route path="/cadastro" element={ <Registration /> } />
                        <Route path="/habitos" element={ <Habits /> } />
                        <Route path="/hoje" element={ <Today /> } />
                        <Route path="/historico" element={ <Historic /> } />
                    </Routes>
                </Main>
            </BrowserRouter>
        </>
    )
}