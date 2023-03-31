import React from 'react'
import { formatResult } from '../helpers'


const OverBox = ({ over, spells, setSpells}) => {



    function handleClick() {
        if (over.filter(ball => ball.isLegal).length < 6) {
            window.alert('The over must be complete before a spell can be entered')
            return
        }
        setSpells(`over${over[0].over}`)
    }


    return (
        // CHEEKY USE OF REACT FRAGMENTS AS I NEED TO MAYBE RETURN TWO ELEMENTS
        <>
            <div 
                onDoubleClick={handleClick}
                className="OverBox br hand"
            >
                {over.map((ball, i) =>
                    <p key={i}>{formatResult(ball.result)}</p>    
                )}

            </div>
            {spells.includes(`over${over[0].over}`) ?
                <div 
                    unselectable='on'
                    className="spellBreak fcc br">
                    <h2>X</h2>
                </div>
            :
                null
            }
        </>
    )
}


export default OverBox
