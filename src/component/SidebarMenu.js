import React from 'react'
const navigation = [
    {name: "home", href: "#home"},
    {name: "about", href: "#about"},
    {name: "designs", href: "#designs"},
    {name: "contact", href: "#contact"}
]

function SidebarMenu() {
  return (
    <div className='side'>
       {
        navigation.map((item) => 
        (<a 
            key={item.name}
            href={item.href}
            className=''
        >
            {item.name}
        </a>) )
       }

    </div>
  )
}

export default SidebarMenu