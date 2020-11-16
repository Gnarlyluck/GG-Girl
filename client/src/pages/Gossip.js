import React, { Component } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { __GetPost } from '../services/PostServices'


export default class Gossip extends Component {
    constructor() {
      super()
      this.state = {
        post: null
      }
    }

    componentDidMount() {
        this.getPost()
      }
    
      getPost = async (props) => {
        console.log('hello')
        try {
          const post = await __GetPost(this.props.match.params.post_id)
          this.setState({ post })
        } catch (error) {
          console.log(error)
        }
      }

      render(){
        return (
          <div></div>
        )
        }
      }
       
// const Home = (props) => {
//    return (
//        <div>
//            <Nav />
//            <h1>
//                Homepage!
//            </h1>
//        </div>
//    )
// }

// export default Home