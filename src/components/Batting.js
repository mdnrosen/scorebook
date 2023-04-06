import React from 'react'
import BatterRow from './BatterRow'


    const Batting = ({ batters, updateBatter, selectPlayer, currentBatter, deliveries }) => {


        function handleDblClick(e){
            e.preventDefault()
            e.target.readOnly = false
        }
    
        function handleBlur(e, key) {
            e.preventDefault()
            updateBatter(e.target.id, key, e.target.value)
            e.target.readOnly = true
        }



        return (
            <div className="Batting">
                <div className="battingTitleRow">
                    <div className="fcc br"></div>
                    <div className="fcc br printed">NAME</div>
                    <div className="fcc br printed">INNINGS</div>
                    <div className="fcc br printed">4 / 6</div>
                    <div className="fcc br printed">HOW OUT</div>
                    <div className="fcc br printed">BOWLER</div>
                    <div className="fcc br printed">SCORE</div>
                    <div className="fcc printed">S/R</div>
                </div>
                {batters.map((batter, i) => 
                    <BatterRow 
                        deliveries={deliveries.filter(ball => ball.batter === batter.num)}
                        key={i}
                        batter={batter}
                        handleBlur={handleBlur}
                        handleDblClick={handleDblClick}
                        selectPlayer={selectPlayer}
                        currentBatter={currentBatter}
                        i={i}
                    />
                )}
            </div>
        )
    }



   

export default Batting