

function allFalse(obj){
    for (let i in obj) {
        if (obj[i] === true) return false
    }
    return true
}

exports.isMaiden = (balls) => {
    if (balls.length < 6) return false
    const wides = balls.filter(ball => ball.result.includes('wd')).reduce((a, b) => a + (b.extras['wd'] || 0), 0)
    const noballs = balls.filter(ball => ball.result.includes('nb')).reduce((a, b) => a + (b.extras['nb'] || 0), 0)
    const runs = balls.reduce((a, b) => a + (b.runs || 0), 0)
    if (wides || noballs || runs) {
        return false
    } else {
        return true
    }

}

exports.sumOfExtras = (extras) => {
    const totalExtras = extras.reduce((a, b) => a + (Object.values(b.extras) || 0), 0)
    if (!totalExtras) return 0
    const values = totalExtras.replace(',','').split('').map(value => parseInt(value))
    return values.reduce((a, b) => a + b)
}

exports.formatResult = (result) => {
    switch(result) {
        case '0':
            return '•'
        case '1':
            return '1'
        case '2':
            return '2'
        case '3':
            return '3'
        case '4':
            return '4'
        case '5':
            return '5'
        case '6':
            return '6'
        case 'W':
            return 'W'
        case '0wd':
            return '+'
        case '1wd':
            return '+'
        case '2wd':
            return '+'
        case '3wd':
            return '+'
        case '4wd':
            return '+'
        case '1b':
            return '▽'
        case '2b':
            return '▽'
        case '3b':
            return '▽'
        case '4b':
            return '▽'
        case '1lb':
            return '△'
        case '2lb':
            return '△'
        case '3lb':
            return '△'
        case '4lb':
            return '△'
        case '0nb':
            return '⦿'
        case '1nb':
            return '➀'
        case '2nb':
            return '➁'
        case '3nb':
            return '➂'
        case '4nb':
            return '➃'
        case '6nb':
            return '➅'
        case 'nb+1':
            return '❶'
        case 'nb+2':
            return '❷'
        case 'nb+3':
            return '❸'
        case 'nb+4':
            return '❹'
        default:
            return '?'
    }
}

exports.formatResultCode = (runs, extrasObj) => {
    let code
    if (runs === 'W') {
        return 'W'
    }
    if (allFalse(extrasObj)) {
        return runs.toString()
    } 
    let results = Object.keys(extrasObj).filter(extra => extrasObj[extra])
    if (results.length === 2) {
        return results.sort()[1] + '+' + runs
    } else {
        code = runs + results[0]
        return code
        // CHECK IF THERE IS WIDE OR NB
    }
}   


exports.formatExtras = (runs, extras) => {
    let obj = {}
    let results = Object.keys(extras).filter(extra => extras[extra])
    if (results.length === 1) {
        switch(results[0]) {
            case 'wd':
                obj[results[0]] = parseInt(runs) + 1
                break;
            case 'nb':
                obj[results[0]] = 1
                break;
            case 'lb':
                obj[results[0]] = parseInt(runs)
                break;
            case 'b':
                obj[results[0]] = parseInt(runs)
            default:
                {}
        }
        return obj
    } else if (results.length > 1) {
        obj[results.sort()[1]] = 1
        obj[results.sort()[0]] = parseInt(runs)
        return obj
    } else {
        return null
    }
}


exports.getRuns = (runs, extras) => {
    if (extras.wd || extras.lb || extras.b) {
        return 0
    }
    return parseInt(runs)
}



