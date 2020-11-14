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
    
      getPost = async () => {
        try {
          const post = await __GetPost(this.props.match.params.post_id)
          this.setState({ post })
        } catch (error) {
          console.log(error)
        }
      }

      render(){
          const {post} = this.state
          if (this.state.post) {
              return (
                <div >
                    <Nav />
                <div >
                  <div >
                    <div className="image-wrapper">
                      <img src={post.image_url} alt="post" />
                    </div>
                  </div>
                  <div className="right-content">
                    <div className="content-top">
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                      <div className="stats ">
                        <div>
                          <p>Likes</p>
                          <p>{post.popularity_rating}</p>
                        </div>
                        <div>
                          <p>Comments</p>
                          <p>{post.comments.length}</p>
                        </div>
                      </div>
                    </div>
                    <div className="comments">
                      {post.comments.length ? (
                        post.comments.map((comment) => (
                          <li className="comment-item" key={comment._id}>
                            <p>
                              <Link>{comment.user_id.name}</Link>
                            </p>
                            <p>{comment.comment}</p>
                          </li>
                        ))
                      ) : (
                        <h3>No Comments</h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              )
          }
          return <h3>Loading...</h3>
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