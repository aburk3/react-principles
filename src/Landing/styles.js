import styled from "styled-components";

const Container = styled.div`
    background: #ffffff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

const Button = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 153px;
    height: 44px;
    padding: 5px 5px;
    background: #9643ff;
    border-radius: 9px;
    color: ${({ color }) => color};
    /* color: #ffffff; */
`;

const ButtonWithHover = styled(Button)`
    &:hover {
        cursor: pointer;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 300px;
    background: #f2f2f2;
    gap: 100px;
    box-shadow: 0px 4px 4px rgba(63, 63, 63, 0.25);
    border-radius: 11px;
`;

const Header = styled.span`
    color: red;
`;
export {
    Container,
    HeaderContainer,
    Header,
    ButtonContainer,
    Button,
    ButtonWithHover,
};
