import React from 'react'

import { getIcon, formatExtras, getRuns, formatResultCode } from '../helpers'

const Controller = ({ bowler, batter, updateDeliveries, undoDelivery, deliveries, resetScorecard  }) => {
    const [extras, setExtras] = React.useState({})
    // const [isLegal, setIsLegal] = React.useState(true)

    let isLegal = true
    let wicket = false

    function handleExtras(e){
        extras[e.target.value] = !extras[e.target.value]

        // To instantly update the component, I need to use the useState callback
        setExtras(prevState => {
            return {...prevState, ...extras}
        })

    }



    function addBall(e){

        // These two lines just keep track of which over we're currently in
        const legal = deliveries.filter(ball => ball.isLegal).length + 1
        const over = Math.ceil(legal / 6)
   
        if (extras['wd'] || extras['nb']) isLegal = false

        let obj = {
            isLegal,
            over,
            bowler,
            batter,
            runs: getRuns(e.target.value, extras),
            extras: formatExtras(e.target.value, extras),
            result: formatResultCode(e.target.value, extras)
        }
        updateDeliveries(obj)
        setExtras(prevState => {
            return {...prevState, ...{}}
        })
        isLegal = true

    }

    return (
        <div className="Controller">
            <div className="reset fcc">
                <button onClick={resetScorecard}>Reset Scorecard</button>
            </div>
            <div className="heading fcc">
                <h4>Controls</h4>
            </div>
            <form className="extrasBtns">
                <input 
                    disabled={extras && extras['wd']}
                    name="extra"
                    type="button" 
                    value="nb" 
                    onClick={handleExtras}
                />
                <input
                    disabled={extras['nb'] || extras['lb']}
                    name="extra"
                    type="button" 
                    value="wd"
                    onClick={handleExtras}
 
                />
                <input 
                    disabled={extras['wd'] || extras['b']}
                    name="extra"
                    type="button" 
                    value="lb" 
                    onClick={handleExtras}

                />
                <input 
                    disabled={extras['wd'] || extras['lb']}
                    name="extra"
                    type="button" 
                    value="b" 
                    onClick={handleExtras}

                />
            </form>
            <div className="runsBtns">
                <input onClick={addBall} name="runs" type="button" value={0} />
                <input onClick={addBall} name="runs" type="button" value={1} />
                <input onClick={addBall} name="runs" type="button" value={2} />
                <input onClick={addBall} name="runs" type="button" value={3} />
                <input onClick={addBall} name="runs" type="button" value={4} />
                <input onClick={addBall} name="runs" type="button" value={6} />
                <input onClick={addBall} name="runs" type="button" value={5} />
                <input className="wicketBtn" onClick={addBall} name="wicket" type="button" value="W"/>
            </div>
            <div className="fcc">
                <button onClick={undoDelivery} className="undoBtn">Undo</button>

            </div>
    
        </div>
    )

}


export default Controller