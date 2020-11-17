import React from 'react'
import GossipImg from '../img-file/gg-background.jpg'
import '../styles/App.css'

// style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "cover", minHeight: "100vh"}}

const Home = (props) => {
  return (
  <div className='mainBackground'>
        <div className="GossipText">
          <p className="welcome">Welcome</p> 
        <p className="datTag">
          to Gossip Girl
          <br/>
          The site ABOUT the in people
          <br/>
          FOR the in people
          <br/>
          By the in people
          </p>
        </div>
        <div className="img-wrapper">
        {/* <img src={GossipImg} alt="NY skyline with XOXO" /> */}
        {/* style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "center", minHeight: "100vh"}} */}
        < div  >
        </div>

        </div>
        
  </div>
  )
}
export default Home