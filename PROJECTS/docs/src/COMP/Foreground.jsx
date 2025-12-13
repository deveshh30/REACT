import React, { useState } from 'react'
import Card from './Card'

function Foreground() {
    const data = [
        { description: "deveshh gupta devesh gupta devesh gupta deveshh gupta ", 
          filesize: ".9mb", 
          close: false, 
          tag:{isOpen: true, tagTitle:"Download Now", tagColor:"green"},
         },
         { description: "deveshh gupta devesh gupta devesh gupta deveshh gupta ", 
          filesize: ".9mb", 
          close: false, 
          tag:{isOpen: true, tagTitle:"Download Now", tagColor:"red"},
         },
         { description: "deveshh gupta devesh gupta devesh gupta deveshh gupta ", 
          filesize: ".9mb", 
          close: false, 
          tag:{isOpen: true, tagTitle:"Download Now", tagColor:"sky"},
         },
    ];
    useState()
    return (
        <div className="h-full w-full z-[3] gap-15 p-5 flex flex-wrap fixed top-0 left-0">
            {data.map((item, index) => (
                <Card data={item} />
            ))}
            
            
            

        </div>

    )
}

export default Foreground
