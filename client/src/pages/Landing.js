import React from 'react'
import GossipImg from '../img-file/gg-background.jpg'


// style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "cover", minHeight: "100vh"}}

const Home = (props) => {
  return (
  <div>
        <p>XOXO GOSSIP GIRL</p>
        <div className="img-wrapper">
        {/* <img src={GossipImg} alt="NY skyline with XOXO" /> */}
        < div style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "center", minHeight: "100vh"}} ></div>

        </div>
        
  </div>
  )
}
export default Home