import React from 'react'


const Fow = ({ fow,  updateFOW  }) => {

    function handleDblClick(e){
        e.preventDefault()
        e.target.readOnly = false
    }

    function handleBlur(e, key) {
        e.preventDefault()
        updateFOW(e.target.id, key, e.target.value)
        e.target.readOnly = true

    }
    return (
        <div className="Fow">
            <div className="fowTopRow fowRow">
                <div className="fcc bb printed">Wkts</div>
                {fow.map((wicket, i) => 
                    <div key={i} className="fcc bl bb printed">
                        <p>{i + 1}</p>
                    </div>
                )}
      
            </div>
            <div className="fowMidRow fowRow">
                <div className="fcc bb printed">Out Bat / Score</div>
                    {fow.map((wicket, i) => 
                        <div key={i} className="fcc bl bb">
                            <input 
                                className="changableInput"
                                id={i} 
                                type="text" 
                                readOnly 
                                defaultValue={fow[i].batter || ''}
                                onDoubleClick={(e) => handleDblClick(e)}
                                onBlur={(e) => handleBlur(e, 'batter')}
                            />
                        </div>
                    )}
            </div>
            <div className="fowMidRow fowRow">
                <div className="fcc bb printed">Total Score</div>
                    {fow.map((wicket, i) => 
                        <div key={i} className="fcc bl bb">
                            <input 
                                className="changableInput"
                                id={i} 
                                type="text" 
                                readOnly 
                                defaultValue={fow[i].total || ''}
                                onDoubleClick={(e) => handleDblClick(e)}
                                onBlur={(e) => handleBlur(e, 'total')}
                            />
                        </div>
                    )}
            </div>
            <div className="fowBottomRow fowRow">
                <div className="fcc printed">Over</div>
                    {fow.map((wicket, i) => 
                        <div key={i} className="fcc bl">
                            <input 
                                className="changableInput"
                                id={i} 
                                type="text" 
                                readOnly 
                                defaultValue={fow[i].partnership || ''}
                                onDoubleClick={(e) => handleDblClick(e)}
                                onBlur={(e) => handleBlur(e, 'partnership')}
                            />
                        </div>
                    )}
            </div>
        </div>
    )

}


export default Fow