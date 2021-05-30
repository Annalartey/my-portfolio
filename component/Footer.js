import React from 'react'

function Footer() {
    return (
        <div className="bg-black text-white p-6 text-center pb-20 ">
            <h1>PRIVACY POLICY</h1>
            <p className="my-10">Sign up with your email address to receive our newsletter & special messages!</p>
            <input type="text" placeholder="Enter email address" className="p-2 pl-10 mb-4 border-b-2 border-white footer"></input>
            <br></br>
            <a href="https://www.youtube.com/channel/UCGCq6qjz1njR0Os3W0bJ4sg?sub_confirmation=1" className="font-bold border-2 px-8 py-2 mb-10">SUBSCRIBE</a>
            <p className="text-gray-500">© Copyright AnnaLartey 2021</p>
        </div>
    )
}

export default Footer
