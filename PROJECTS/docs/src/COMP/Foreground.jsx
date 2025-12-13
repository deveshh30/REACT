import React, { useRef } from 'react'
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
          tag:{isOpen: true, tagTitle:"UPLOAD Now", tagColor:"blue"},
         },
         { description: "deveshh gupta devesh gupta devesh gupta deveshh gupta ", 
          filesize: ".9mb", 
          close: false, 
          tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"},
         },
    ];
    const constraintsRef = useRef(null)
    return (
        <div ref={constraintsRef} className="fixed inset-0 z-[3] gap-15 p-5 flex flex-wrap overflow-visible">
            {data.map((item, index) => (
                <Card key={index} data={item} constraintsRef={constraintsRef} />
            ))}
            
            
            

        </div>

    )
}

export default Foreground
