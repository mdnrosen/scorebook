import React from 'react'


import GameInfo from './GameInfo'
import Controller from './Controller'
import Batting from './Batting'
import Fow from './Fow'
import Extras from './Extras'
import Totals from './Totals'
import Bowling from './Bowling'
import Overs from './Overs'


import newInns from '../previousInns/alleynton.json'


class Scorebook extends React.Component{
    state = {

        inns: {
            current: {
                batter: 1,
                bowler: 1
            },
           
            gameInfo: {
                home: '',
                away: '',
                matchType: '',
                venue: '',
                innsOf: '',
                date: '',
                startTime: ''
            },
            bowlers: [
                {num: 1, name: ''},
                {num: 2, name: ''},
                {num: 3, name: ''},
                {num: 4, name: ''},
                {num: 5, name: ''},
                {num: 6, name: ''},
                {num: 7, name: ''},
                {num: 8, name: ''}
            ],
            spells: [],
            batters: [
                {num: 1, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 2, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 3, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 4, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 5, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 6, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 7, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 8, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 9, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 10, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
                {num: 11, name: '', inns: '', boundaries: '', howout: '', bowler: '', score: ''},
            ],
            fow: [
                {
                    number: 1,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 2,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 3,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 4,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 5,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 6,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 7,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 8,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 9,
                    batter: '',
                    partnership: '',
                    total: ''
                },
                {
                    number: 10,
                    batter: '',
                    partnership: '',
                    total: ''
                },
            ],
            over: 0,
            deliveries: [],

        }
    }


  
    componentDidMount(){
        // window.localStorage.setItem('inns', JSON.stringify(this.state.inns))
        // this.setState({ inns: newInns })
        const inns = JSON.parse(window.localStorage.getItem('inns'))
        if (!inns) {
            return
        } else {
            this.setState({ inns })
        }
    }

    componentDidUpdate(){
        window.localStorage.setItem('inns', JSON.stringify(this.state.inns))
    }

    resetScorecard = () => {
        localStorage.removeItem('inns')
        window.location.reload()
    }

    updateGameInfo = (id, value) => {
        const gameInfo = this.state.inns.gameInfo
        gameInfo[id] = value
        this.setState({ gameInfo })
    }



    selectPlayer = (type, num) => {
        const inns = this.state.inns
        inns.current[type] = num
        this.setState({ inns })
    }



    updateBatter = (id, key, value) => {
        const updated = this.state.inns.batters.map(batter => {
            if (batter.num === parseInt(id) + 1) {
                return {...batter, [key]: value }
            }
            return batter
        })
        const inns = {...this.state.inns}
        inns.batters = updated
        this.setState({ inns })
    }

    updateBowler = (id, key, value) => {
        const updated = this.state.inns.bowlers.map(bowler => {
            if (bowler.num === parseInt(id) + 1) {
                return {...bowler, [key]: value }
            }
            return bowler
        })
        const inns = {...this.state.inns}
        inns.bowlers = updated
        this.setState({ inns })
    }

    updateDeliveries = (obj) => {
        const inns = this.state.inns
        inns.deliveries.push(obj)
        const ballCount = inns.deliveries.filter(ball => ball.isLegal).length

        this.setState({ inns })
    }

    undoDelivery = () => {
        const inns = this.state.inns
        inns.deliveries.pop()

        this.setState({ inns })
    }

    updateFOW = (id, key, value) => {
        const fow = this.state.inns.fow
        fow[id][key] = value
        this.setState({ fow })
    }


    setSpells = (over) => {
        const inns = this.state.inns
        if (inns.spells.includes(over)) {
            const updated = inns.spells.filter(spell => spell !== over)
            inns.spells = updated
            this.setState({ inns })
        } else {
            const updated = [...inns.spells, over]
            inns.spells = updated
            this.setState({ inns })
        } 
    }


    render(){
        const { gameInfo, bowlers, batters, current, deliveries, fow, spells } = this.state.inns
        return (
            <div className="Scorebook">
                <GameInfo
                    info={gameInfo}
                    updateGameInfo={this.updateGameInfo}
                />
     
                <Batting
                    selectPlayer={this.selectPlayer}
                    batters={batters} 
                    updateBatter={this.updateBatter}
                    currentBatter={current.batter}
                    deliveries={deliveries}

                   />
                <Fow
                    fow={fow}
                    updateFOW={this.updateFOW}
                />
                <Extras
                    extras={deliveries.filter(ball => ball.extras)}
                />
                <Totals
                    deliveries={deliveries}

                
                />
                <Bowling
                    spells={spells}
                    selectPlayer={this.selectPlayer}
                    bowlers={bowlers}
                    updateBowler={this.updateBowler}
                    currentBowler={current.bowler}
                    deliveries={deliveries}
                    setSpells={this.setSpells}


                />
                <Controller
                    bowler={current.bowler}
                    batter={current.batter}
                    updateDeliveries={this.updateDeliveries}
                    undoDelivery={this.undoDelivery}
                    deliveries={deliveries}
                    resetScorecard={this.resetScorecard}
                />
                <Overs
                    deliveries={deliveries}
                />
            </div>

        
        )
    }
}


export default Scorebook