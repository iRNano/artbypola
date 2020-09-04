import React from 'react'

const PortraitOtherCollections = ({otherPortraits, selectedPortrait}) => {
    console.log(selectedPortrait)
    const renderOtherPortraits = otherPortraits.map(portrait => {
            console.log(portrait)
            if(portrait._id !== selectedPortrait._id){
                return(
                    <img src={portrait.url} style={{maxWidth: "300px"}}></img>
                )
            }
            
        
    })
    return(
        <div>
            <h1>More from this collection</h1>
            {otherPortraits? renderOtherPortraits : 'loading'}
        </div>
    )
}

export default PortraitOtherCollections;