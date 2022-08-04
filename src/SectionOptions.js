import React from 'react'
import "./SectionOptions.css"
function SectionOptions({Icon,title,color}) {
  return (
    <div className='Section__option'>
     {Icon && <Icon style={{color:color}}/>}
     <h4 >{title}</h4>
    </div>
  )
}

export default SectionOptions