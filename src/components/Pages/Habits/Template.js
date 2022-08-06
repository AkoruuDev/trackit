import styled from "styled-components"

export default function Template() {
    return(
        <Habit>
            <Form>
                <Input type="text" placeholder="nome do hábito"/>
                <Select>
                    <Day>D</Day>
                    <Day>S</Day>
                    <Day>T</Day>
                    <Day>Q</Day>
                    <Day>Q</Day>
                    <Day>S</Day>
                    <Day>S</Day>
                </Select>
                <FinishBox>
                    <Cancel type="reset">Cancelar</Cancel>
                    <Save type="submit">Salvar</Save>
                </FinishBox>
            </Form>
        </Habit>
    )
}

const Habit = styled.div`
    margin-top: 18px;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
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

const Select = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-between;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px #CFCFCF solid;
    color: #CFCFCF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FinishBox = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: end;
`;

const Cancel = styled.button`
    width: 84px;
    height: 35px;
    margin-right: 8px;
    font-family:'Lexend Deca', sans-serif;
    background: transparent;
    box-sizing: border-box;
    border: none;
    color: #52B6FF;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    font-family:'Lexend Deca', sans-serif;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
`;