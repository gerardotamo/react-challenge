import styled from "styled-components";

const CardPost = styled.div`
    display: flex;
    width: 50%;
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 5px 5px 8px gray;
    flex-direction: column;
    cursor: pointer;
    :hover{
        background-color: #2D4440;
        color: white;
    }
    
`;

export { CardPost };