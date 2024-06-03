import React from 'react'
import developer from './WIN_20231112_15_47_23_Pro.jpg'


const Developer = () => {
    return (
        <>
            <div className="contianer my-5">
                <div className="card text-center">
                    <div className="card-header">
                        Featured Developer 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">🌟Vishu Patle🌟</h5>
                        <img src={developer} alt='Developer' style={{height: '400px', width:'700px', border:'4px solid black'}} />
                        <p className="card-text my-3">Welcome to GlobeGazettee! I'm Vishu Patle, The developer of this React js based Website. I'm currently learning different frameworks and enhancing my developing skills. Hope you like my work! 
                        You can also checkout my github profile by clicking on the button below.
                        ThankYou!❤️ </p>
                        <a href="https://github.com/vishu0310" className="btn btn-primary">Go To Github Profile</a>
                    </div>
                    <div className="card-footer text-body-secondary">
                        
                    </div>
                </div>
            </div>
        </>
    )

}

export default Developer

