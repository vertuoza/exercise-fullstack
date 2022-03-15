import styled from "styled-components";


export const ItemContainer = styled.div`
    display: flex;
    border: 1px solid lightGrey;
    border-radius: 4px;
    margin-bottom: 5px;    
    padding: 15px;

    .date {
        margin-right: 15px;
        width: 150px;
    }
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
`