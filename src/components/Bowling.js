import React from 'react'
import BowlerRow from './BowlerRow'

const Bowling = ({ bowlers, updateBowler, selectPlayer, currentBowler, deliveries, spells, setSpells }) => {

    function handleDblClick(e){
        e.preventDefault()
        e.target.readOnly = false
    }

    function handleBlur(e, key) {
        e.preventDefault()
        updateBowler(e.target.id, key, e.target.value)
        e.target.readOnly = true
    }

    return (
        <div className="Bowling">
            <div className="bowlingTitleRow bb">
                <div className="fcc br printed"></div>
                <div className="fcc br printed">Name</div>
                <div className="fcc br printed"></div>
                <div className="fcc br printed">w/nb</div>
                <div className="fcc br printed">O</div>
                <div className="fcc br printed">M</div>
                <div className="fcc br printed">Runs</div>
                <div className="fcc br printed">Wkt</div>
                <div className="fcc br printed">Econ</div>
            </div>
            {bowlers.map((bowler, i) =>
                <BowlerRow 
                    deliveries={deliveries.filter(ball => ball.bowler === bowler.num)}
                    key={i}
                    bowler={bowler}
                    handleDblClick={handleDblClick}
                    handleBlur={handleBlur}
                    selectPlayer={selectPlayer}
                    currentBowler={currentBowler}
                    spells={spells}
                    setSpells={setSpells}
                    i={i}
                />
            )}
        </div>
    )

}


export default Bowling