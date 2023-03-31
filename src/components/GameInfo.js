import React, { useState } from 'react'


const GameInfo = ({ info, updateGameInfo }) => {

    function handleDblClick(e){
        e.preventDefault()
        e.target.readOnly = false
    }

    function handleBlur(e, key) {
        e.preventDefault()
        updateGameInfo(e.target.id, e.target.value)
        e.target.readOnly = true

    }
    return (
        <form className="GameInfo">
            <div className="topRow">
                <div className="fcc" >
                    <input 
                        className="changableInput bigFont"
                        id="home" 
                        type="text" 
                        defaultValue={info.home} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                    />
                 
                </div>
                <div className="fcc bl br printed">
                    <p>VS</p>
                </div>
                <div className="fcc">
                    <input 
                        className="changableInput bigFont"
                        id="away" 
                        type="text" 
                        defaultValue={info.away} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                   />
                </div>
                <div className="fcc bl br printed">
                    <p>VENUE</p>
                </div>
                <div className="fcc">
                    <input 
                        className="changableInput bigFont"
                        id="venue" 
                        type="text" 
                        defaultValue={info.venue} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                   />
                </div>
                <div className="fcc bl br printed">
                    <p>INNS OF</p>
                </div>
                <div className="fcc">
                    <input 
                            className="changableInput bigFont"
                            id="innsOf" 
                            type="text" 
                            defaultValue={info.innsOf} 
                            readOnly 
                            onDoubleClick={(e) => handleDblClick(e)}
                            onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="bottomRow">
                <div className="fcc br printed">

                 <p>MATCH TYPE</p>
                </div>
                <div className="fcc">
                <input 
                        className="changableInput bigFont"
                        id="matchType" 
                        type="text" 
                        defaultValue={info.matchType} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                   />
                </div>
                <div className="fcc br bl printed">
                    <p>DATE</p>
                </div>
                <div className="fcc ">
                <input 
                        className="changableInput bigFont"
                        id="date" 
                        type="text" 
                        defaultValue={info.date} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                   />
                </div>
                <div className="fcc br bl printed">
                    <p>START TIME</p>
                </div>
                <div className="fcc">
                <input 
                        className="changableInput bigFont"
                        id="startTime" 
                        type="text" 
                        defaultValue={info.startTime} 
                        readOnly 
                        onDoubleClick={(e) => handleDblClick(e)}
                        onBlur={handleBlur}
                   />
                </div>

            </div>
            
        </form>
    )

}


export default GameInfo