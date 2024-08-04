import { useState } from "react";

export default function Player({ intialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(intialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick() {
        setIsEditing(editing => !editing)
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value)
    }
    let editPlayerName = <span className="player-name"> {playerName}</span>

    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChangePlayerName} />
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol"> {symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );

}