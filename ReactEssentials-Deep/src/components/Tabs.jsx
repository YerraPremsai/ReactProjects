export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // we can directly give ButtonContainer because the starting letter shouls start with capital letter (or) another alternative is given below
    //const ButtonsContainer = buttonsContainer
    return (<>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
    );
}