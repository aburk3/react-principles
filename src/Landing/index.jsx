import {
    Container,
    HeaderContainer,
    Header,
    Button,
    ButtonWithHover,
    ButtonContainer,
} from "./styles";
import useData from "../hooks/useData";

const Landing = () => {
    const { results, clickedButton, buttonColor } = useData(true);

    return (
        <Container>
            <ButtonContainer>
                <Button color={buttonColor} onClick={() => clickedButton()}>
                    This is a button
                </Button>
                <ButtonWithHover
                    color={buttonColor}
                    onClick={() => clickedButton()}
                >
                    Get next todo data
                </ButtonWithHover>
            </ButtonContainer>
            <HeaderContainer>
                {<Header>{results && results.title}</Header>}
            </HeaderContainer>
        </Container>
    );
};

export default Landing;
