import { useState } from "react";
export default function Player({initialName, symbol, isActive}){
    const [ playerName, setPlayerName] = useState(initialName);
    const [isEditting, setIsEditting ] = useState(false);
    
    function handleEditingClick(){
        setIsEditting(isEditting ? false : true);
    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }
    
    let editablePlayerName =  <span className="player-name">{playerName}</span>

    if(isEditting){
        editablePlayerName = <input type="text" required Value={playerName} onChange={handleChange} />
    }

    return(
        
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditingClick}>{isEditting ? 'Save' : 'Edit'}</button>
        </li>
        
    )
}