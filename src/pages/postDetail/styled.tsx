import styled from "styled-components";

const Content = styled.div`
    display: flex;
    width: 65%;
    justify-content: flex-start;
    margin: 20px;
    padding: 15px;
    flex-direction: column;
    margin-left: 11%;
    text-align: start;
`;

const PostDetailStyled = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 8px gray;
    display: flex;
    height: 100%;
    flex-direction: column;
`;

const UserDetail = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 8px gray;
    display: flex;
    flex-direction: column;
    color: #C1B5A0;
    padding: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PersonalInfo = styled.div`
    margin-top: 5px;
    align-items: flex-start;
`;

export { Content, PersonalInfo, PostDetailStyled, UserDetail, UserInfo }