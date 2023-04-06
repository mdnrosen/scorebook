import React from 'react'


import { formatResult } from '../helpers'

const BatterRow = ({ i, batter, handleBlur, handleDblClick, selectPlayer, currentBatter, deliveries }) => {
    
    function getBallsFaced(){
        if (!deliveries.length) return ''
        const balls = deliveries.filter(ball => {
            return ball.extras ?
                !ball.extras['wd']
            :
            ball
        })
        return balls.length
    }

    function getScore(){
        if (!deliveries.length) return ''
        const nums = deliveries.filter(ball => ball.runs).map(run => parseInt(run.runs))
        if (!nums.length) return 0
        return nums.reduce((acc, cv) => acc + cv)
    }

    function getInns(){
        return deliveries.map(({ result, bowler }) => ({ result, bowler }))

    }

    function getBoundaries(){
        if (!deliveries.length) return ''

        const fours = deliveries.filter(ball => ball.runs === 4).length
        const sixes = deliveries.filter(ball => ball.runs === 6).length

       return `${fours || '-'} / ${sixes || '-'}`
    }

    function getStrikeRate(){
        if (!deliveries.length) return ''
        const num = getScore() / getBallsFaced()
        
        return (num * 100).toFixed(2)
    }

    



    return (
        <div 
            className={`batting-row ${currentBatter === batter.num ? 'selected' : ''}`}
            onClick={() => selectPlayer('batter', i + 1)}

        >
            <div className="fcc br printed">
                
                <p>{batter.num}</p>
            </div>
            <div className="fcc br">
                <input 
                    className="changableInput"
                    id={i} 
                    type="text" 
                    defaultValue={batter.name} 
                    readOnly 
                    onDoubleClick={(e) => handleDblClick(e)}
                    onBlur={(e) => handleBlur(e, 'name')}
                />                       
            </div>
            <div className={`br hand batInns ${batter.howout ? 'isOut': '' }`}>
                {getInns().map((ball, i) => 
                    <div
                        key={i}
                        className={`ball bowler${ball.bowler} ${ball === '•' ? 'stacked' : ''}`}
                    >{formatResult(ball.result)}
                    </div>
                
                )}
            </div>
            <div className="fcc br hand">
                <p>{getBoundaries()}</p>
            </div>
            <div className="fcc br">
                <input 
                    className="changableInput"
                    id={i} 
                    type="text" 
                    defaultValue={batter.howout} 
                    readOnly 
                    onDoubleClick={(e) => handleDblClick(e)}
                    onBlur={(e) => handleBlur(e, 'howout')}
                />               
            </div>
            <div className="fcc br">
                <input 
                    className="changableInput"
                    id={i} 
                    type="text" 
                    defaultValue={batter.bowler} 
                    readOnly 
                    onDoubleClick={(e) => handleDblClick(e)}
                    onBlur={(e) => handleBlur(e, 'bowler')}
                />               
            </div>
 
            <div className="br fcsa hand">
                <h3 className="mr3 notbold">{getScore()}</h3>
                <sup>{`${getBallsFaced()}`}</sup>
            </div>
            <div className="br fcsa hand">
                <small>{getStrikeRate()}</small>
            </div>
        
  
        </div>
    )
}

export default BatterRow