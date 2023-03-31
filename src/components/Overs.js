import React from 'react'
import _ from 'lodash'
import OversLogRow from './OversLogRow'


const Overs = ({ deliveries }) => {

    function getOvers(){
        const overs = _.groupBy(deliveries, 'over')
        return Object.values(overs)
    }

    const overs = Array.from(Array(20).keys())
    return (
        <div className="Overs">
            <div className="oversRow bb">
                <div className="br">
                    <p></p>
                </div>
                <div className="br fcc">
                    <p>TOTAL</p>
                </div>
                <div className="br fcc">
                    <p>BWLR</p>
                </div>
                <div className="fcc">
                    <p>RUNS</p>
                </div>
            </div>
            {overs.map((num, i) => 
                <OversLogRow 
                    key={i}
                    deliveries={deliveries}
                    num={i}
                    oversBowled={getOvers().length}
                    overs={getOvers()}
                
                
                />
       
            )}
            
        </div>
    )
}


export default Overs