import React from 'react'
import DesignHeader from './DesignHeader'
import Footer from './Footer'
import ReactPlayer from 'react-player/youtube'

function LyricsPage() {
    return (
        <div>
            <DesignHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">L<br></br>Y<br></br>R<br></br>I<br></br>C<br></br>S</h1>
                <div className="lg:ml-14">
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=HMqUCNixWtw"
                        />
                    </div>
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=r8JE-mFnnmI"
                        />
                    </div>
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=_vLLNyYk4XU"
                        />
                    </div>
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=omqWwR9Nr6I"
                        />
                    </div>
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1e0hxsNK1tE"
                        />
                    </div>
                    <div className="my-10 border-2 border-gray-300 p-8">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Q5IU24-B3Nc"
                        />
                    </div>
                </div>
            </div> 
            <button className="">Visit Youtube Channel</button>
            <Footer/>
        </div>
    )
}

export default LyricsPage
