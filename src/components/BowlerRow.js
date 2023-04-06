import React, { useEffect, useState } from 'react'

import _ from 'lodash'

import OverBox from './OverBox'
import { isMaiden } from '../helpers'
const BowlerRow = ({ i, bowler, handleDblClick, handleBlur, selectPlayer, currentBowler, deliveries, spells, setSpells }) => {
    const [overs, setOvers] = useState([])




    function getWickets(){
        if (!deliveries.length) return ''
        const wickets = deliveries.filter(ball => ball.result === 'W').length
        return wickets
    }


    function totalOvers(){
        if (!deliveries.length) return ''
       const legal = deliveries.filter(ball => ball.isLegal).length
       return `${Math.floor(legal / 6)}.${legal % 6}`
    }


    function getOvers(){
        const overs = _.groupBy(deliveries, 'over')
        return Object.values(overs)
    }


    function getMaidens(){
        if (!getOvers().length) return ''
        let total = 0
        getOvers().forEach(over => {
            if (isMaiden(over)) total++
            return
        })
        return total
    }


    const wides = deliveries.filter(ball => ball.result.includes('wd')).reduce((a, b) => a + (b.extras['wd'] || 0), 0)
    const noballs = deliveries.filter(ball => ball.result.includes('nb')).reduce((a, b) => a + (b.extras['nb'] || 0), 0)
    const runs = deliveries.reduce((a, b) => a + (b.runs || 0), 0)
    const totalRuns = () => {
        if (!deliveries.length) return ''
         return wides + noballs + runs
    }


    function getExtras(){
        if (!deliveries.length) return ''
        return `${wides} / ${noballs}`
    }


    function getEcon(){
        if (!deliveries.length) return ''
        const runs = totalRuns()
        const oversAsPerc = deliveries.filter(d => d.isLegal).length / 6
        const num = runs / oversAsPerc
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    
    return (
        <div 
            className={`bowling-row bb ${currentBowler === bowler.num ? 'selected' : ''}`}
            onClick={() => selectPlayer('bowler', i + 1)}
        >
            <div className="fcc br printed">
                <p>{bowler.num}</p>
            </div>
            <div className="fcc br">
                <input 
                    className={`changableInput bigFont bowler${bowler.num}`}
                    id={i} 
                    type="text" 
                    defaultValue={bowler.name} 
                    readOnly 
                    onDoubleClick={(e) => handleDblClick(e)}
                    onBlur={(e) => handleBlur(e, 'name')}
                />                       
            </div>
            <div className={`br bowlingOvers bowler${bowler.num}`}>
                {getOvers().map((over,i) => 
                    <>
                        <OverBox
                            key={i}
                            over={over}
                            spells={spells}
                            setSpells={setSpells}
                        />
                 
                    </>
        
                    
                       
                )}
            </div>
            <div className={`br fcc hand bowler${bowler.num}`}>
                <p>{getExtras()}</p>
            </div>
            <div className={`br fcc hand bigFont bowler${bowler.num}`}>
                <p>{totalOvers()}</p>
            </div>
            <div className={`br fcc hand bigFont bowler${bowler.num}`}>
                <p>{getMaidens()}</p>
            </div>
            <div className={`br fcc hand bigFont bowler${bowler.num}`}>
                <p>{totalRuns()}</p>
            </div>
            <div className={`br fcc hand bigFont bowler${bowler.num}`}>
                <p>{getWickets()}</p>
            </div>
            <div className={`br fcc hand bigFont bowler${bowler.num}`}>
                <p>{getEcon()}</p>
            </div>


    
        </div>
    )
}

export default BowlerRow