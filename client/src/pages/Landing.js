import React from 'react'
import GossipImg from '../img-file/gg-background.jpg'


// style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "cover", minHeight: "100vh"}}

const Home = (props) => {
  return (
  <div>
   
        <div className="img-wrapper">
        <img src={GossipImg} alt="NY skyline with XOXO" />
        </div>
        
  </div>
  )
}
export default Home