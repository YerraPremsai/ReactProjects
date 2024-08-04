
export default function TapButton({ children, onSelect, isSelected }) {

    return (
        <li>
            <button className={isSelected ? "active" : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}