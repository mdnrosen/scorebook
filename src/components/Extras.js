import React from 'react'


const Extras = ({ extras }) => {



    function getTotal(type) {
        return extras.reduce((a, b) => a + (b.extras[type] || 0), 0)
    }
    
    function getCount(type){
        let count = ''
        const list = extras.filter(extra => extra.extras)
        list.forEach(extra => {
            if (!extra.extras[type]) return
            count += extra.extras[type].toString()
        })
        return count
    }


    return (
        <div className="Extras">
        <div className="pl3 byesLabel smLabel ffsc br bb printed">
            <p>BYES</p>
        </div>
        <div className="byesCount hand ffsc pl3 bb br">
            <p>{getCount('b') || ''}</p>
        </div>
        <div className="byesTotal hand bb fcc">
            <p>
            {getTotal('b') || ''}
            </p>
        </div>

        <div className="pl3 legbyesLabel smLabel ffsc br bb printed">
            <p>LEG BYES</p>
        </div>
        <div className="legbyesCount hand ffsc pl3 bb br">
            <p>{getCount('lb') || ''}</p>
        </div>
        <div className="legbyesTotal hand bb fcc">
            <p>{getTotal('lb') || ''}</p>
        </div>

        <div className="pl3 legbyesLabel smLabel ffsc br bb printed">
            <p>WIDES</p>
        </div>
        <div className="legbyesCount hand ffsc pl3 bb br">
            <p>{getCount('wd')}</p>
        </div>
        <div className="legbyesTotal hand bb fcc">
            <p>{getTotal('wd') || ''}</p>
        </div>

        <div className="pl3 legbyesLabel smLabel ffsc br bb printed">
            <p>NO BALLS</p>
        </div>
        <div className="legbyesCount hand ffsc pl3 bb br">
            <p>{getCount('nb') || ''}</p>
        </div>
        <div className="legbyesTotal hand bb fcc">
            <p>{getTotal('nb') || ''}</p>
        </div>



{/* 
        {
            extras.map((extra, i) =>
                <React.Fragment key={i}>
                    <div className={byesLabel smLabel ffsc br bb extrasLabel`}>
                        <p>{extra.type.toUpperCase()}</p>
                    </div>
                    <div className={byesCount hand ffsc pl5 bb br`}>
                        <p>{extra.count}</p>
                    </div>
                    <div className={byesTotal hand bb fcc`}>
                        <p>{extra.total}</p>
                    </div>
                </React.Fragment>
            )
        } */}
    </div>
    )

}


export default Extras