
import { sumOfExtras } from '../helpers'


const OversLogRow = ({ deliveries , num, overs}) => {

    const oversBowled = overs.length
    function getTotal(){
        if (!deliveries.length) return
        if (num + 1 > oversBowled) return
        if (overs[num].filter(ball => ball.isLegal).length < 6) return

        const filtered = deliveries.filter(ball => ball.over <= num + 1)
        const runs = filtered.reduce((a, b) => a + (b.runs || 0), 0)
        const extras = filtered.filter(ball => ball.extras)
        return runs + sumOfExtras(extras)
    }

    function getBowler(){
        if (!deliveries.length) return
        if (num + 1 > oversBowled) return
        if (overs[num].filter(ball => ball.isLegal).length < 6) return

        return overs[num][0].bowler
    }

    function runsInOver(){
        if (!deliveries.length) return
        if (num + 1 > oversBowled) return
        if (overs[num].filter(ball => ball.isLegal).length < 6) return
        const runs = overs[num].reduce((a, b) => a + (b.runs || 0), 0)
        const extras = overs[num].filter(ball => ball.extras)
        return runs + sumOfExtras(extras)

    }



    return (
        <div className="bb oversRow">
            <p className="fcc br">{num + 1}</p>
            <p className="fcc br hand overLogCell">{getTotal()}</p>
            <p className={`fcc br hand overLogCell bowler${getBowler()}`}>{getBowler()}</p>
            <p className={`fcc br hand overLogCell bowler${getBowler()}`}>{runsInOver()}</p>
        </div>
    )
}


export default OversLogRow