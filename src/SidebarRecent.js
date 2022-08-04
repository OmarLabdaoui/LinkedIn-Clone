import React from 'react'

function SidebarRecent({topic}) {
  return (
        <div className="sidebar__Recent">
        <span className="hache">#</span>
        <p>{topic}</p>
        </div>
    
  )
}

export default SidebarRecent