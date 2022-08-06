import { useState } from "react";
import styled from "styled-components";

let days = [];

function DayBox({d, n, selectDay}) {
    const [color, setColor] = useState(false);

    function toggleColor({ day }) {
        setColor(!color);
        selectDay({ day });
    }

    if(color) {
        return <DaySelected onClick={(e) => toggleColor({ day: n })}>{d}</DaySelected>;
    }
    return <Day onClick={(e) => toggleColor({ day: n })}>{d}</Day>;
}

export default function Template({
    habs,
    setHabs,
    habts
}) {
    function addHabit({ value, name }) {
        setHabs({
          ...habs,
          [name]: value,
        });
        console.log(habs)
    }

    function selectDay({ day }) {
        if (days.includes(day)) {
            days.splice(days.indexOf(day), 1);
        } else {
            days.push(day);
        }
        console.log(days);
    }

    function submitHabit() {
        habts.push({
            habs,
            days: days
        })
    }

    return(
        <Habit>
            <Form>
                <Input type="text" name="name" onChange=
                    {(e) => addHabit({
                        name: e.target.name,
                        value: e.target.value,
                    })
                }
                placeholder="nome do hábito"/>
                <Select>
                    <DayBox d="D" n={0} selectDay={selectDay} />
                    <DayBox d="S" n={1} selectDay={selectDay} />
                    <DayBox d="T" n={2} selectDay={selectDay} />
                    <DayBox d="Q" n={3} selectDay={selectDay} />
                    <DayBox d="Q" n={4} selectDay={selectDay} />
                    <DayBox d="S" n={5} selectDay={selectDay} />
                    <DayBox d="S" n={6} selectDay={selectDay} />
                </Select>
                <FinishBox>
                    <Cancel type="reset">Cancelar</Cancel>
                    <Save type="submit" onClick={submitHabit}>Salvar</Save>
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

const DaySelected = styled(Day)`
    background-color: #CFCFCF;
    color: #FFFFFF;
`

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