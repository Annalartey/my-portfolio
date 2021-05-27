import React from 'react'
import DesignHeader from './DesignHeader'

function PaperPage() {
    return (
        <div>
            <DesignHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl mx-14 mt-6 text-center">P<br></br>A<br></br>P<br></br>E<br></br>R</h1>
                <div className="ml-14">
                    <div className="flex">
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 mr-8">
                            <p>newsite.com</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 mr-8">
                            <p>newsite.com</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default PaperPage
