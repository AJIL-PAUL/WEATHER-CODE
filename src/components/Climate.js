import React, { Component } from 'react'
import Lottie from 'react-lottie'
// import animationData1 from '../assets/climate/data.json'

class Climate extends Component {
  render(){
   

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData:this.props.animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
      
    };

    return(
      <div className="controlled">
        <Lottie options={defaultOptions}
              // height=100%
              // width={400}
        />
      </div>
    )
  }
}

export default Climate