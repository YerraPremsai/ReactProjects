import InvestImg from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (<header id='header'>
        <img src={InvestImg} alt="invest-image" />
        <h1>Investment Calculator</h1>
    </header>
    );
}