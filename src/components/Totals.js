import React from 'react'
import { sumOfExtras } from '../helpers'


const Totals = ({ deliveries }) => {

    function totalOvers(){
        if (!deliveries.length) return ''
       const legal = deliveries.filter(ball => ball.isLegal).length
       return `${Math.floor(legal / 6)}.${legal % 6}`
    }

    function getWickets(){
        if (!deliveries.length) return ''
        const wickets = deliveries.filter(ball => ball.wicket).length
        return wickets
    }

    const runs = deliveries.reduce((a, b) => a + (b.runs || 0), 0)
    const extras = deliveries.filter(ball => ball.extras)

    return (
        <div className="Totals br">
            <div className="printed smLabel br bb fcc pl5">
                <p>RUNS</p>
            </div>
            <div className="runsSum hand bb fcc">
                <p>{runs}</p>
            </div>


            <div className="printed smLabel br bb fcc pl5">
                <p>EXTRAS</p>
            </div>
            <div className="extrasTotal hand bb fcc">
                <p>{sumOfExtras(extras)}</p>
            </div>
            <div className="printed smLabel br bb fcc pl5">
                <p>OVERS</p>
            </div>
            <div className="extrasTotal hand bb fcc">
                <p>{totalOvers()}</p>
            </div>

            <div className="printed midLabel br bb fcc pl5">
                <p><strong>TOTAL</strong></p>
            </div>
            <div className="total bb fcc hand noCaps totalScore">
                <h3>{runs + sumOfExtras(extras)}</h3>
            </div>
        </div>
    )

}


export default Totals