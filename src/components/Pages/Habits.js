import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

export default function Habits() {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <h1>Meus Habitos</h1>
                    <div>+</div>
                </div>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </div>
            <Footer />
        </div>
    )
}