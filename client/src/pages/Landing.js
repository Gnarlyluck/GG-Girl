import React from 'react'
import GossipImg from '../img-file/gg-background.jpg'
import Nav from '../components/Nav'


// style={{backgroundImage: `url(${GossipImg})`, backgroundSize: "cover", minHeight: "100vh"}}

const Home = (props) => {
  return (
  <div>
    <Nav />
        <p>XOXO GOSSIP GIRL</p>
        <div className="img-wrapper">
        <img src={GossipImg} alt="NY skyline with XOXO" />
        </div>
        
  </div>
  )
}
export default Home