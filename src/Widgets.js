import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css'
import CircleIcon from '@mui/icons-material/Circle';
function Widgets() {
    const news=(title,subtitle)=>{
        return (
<div className="widgets__news">
<div className="widgets__news__articleleft">
<CircleIcon/>
</div>
<div className="widgets__news__articleright">
  <h4>{title}</h4>
  <p>{subtitle}</p>
</div>
</div>
        )}
  return (
    <div className="widgets">
    <div className="Widgets__header">
    <h2>LinkedIn News</h2>
<InfoIcon/>
    </div>
{news('Papa React','React js course and Clone')}
{news('Softwar Engeneriing','React js course and Clone')}
{news('Corana virus','React js course and Clone')}
{news('Fottbals Stars','React js course and Clone')}
    </div>
  )
}

export default Widgets