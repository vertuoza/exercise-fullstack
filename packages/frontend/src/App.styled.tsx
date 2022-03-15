import styled from "styled-components";


export const Section = styled.section`
    flex: 1;
    display: flex;
    width: 80%;
    max-width: 1200px;
    margin: auto;
`;

export const Content = styled.div`
    display: flex;    
    flex-direction: column;
    height: 100vh;

    h1 {
        margin: 20px auto;
        margin-bottom: 15px;
    }
`;

export const Detail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-bottom: 40px;
    border-radius: 4px;
    border: 1px solid lightGrey;
`