import React, { Component } from 'react'
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
        console.log('hello')
        try {
          const post = await __GetPost(this.props.match.params.post_id)
          this.setState({ post })
        } catch (error) {
          console.log(error)
        }
      }

      render(){
        const { post } = this.state
        if (this.state.post) {
          return (
            <div style={{backgroundImage: 'url https://www.photocircle.net/eu/photos/thumbnails/zoom/80217-Manhattan-skyline-at-night--by-jan-becke.jpg'}}>
              <div className="row"> 
                <div className="col s6  ">
                  <div className="card">
                    <div className="card-image">
                      <img src={post.image_url} alt="post" />
                      <h2>{post.title}</h2>
                    </div>
                    <div className="card-content">
                      <p>{post.description}</p>
                    </div>
                      <div>
                        <p>Comments</p>
                        <p>{post.comments.length}</p>
                        <p>Likes</p>
                        <p>{post.popularity_rating}</p>
                      </div>
                  </div>
                    {post.comments.length ? (
                      post.comments.map((comment) => (
                        <li className="comment-item" key={comment._id}>
                          <p><Link>{comment.user_id.name}</Link></p>
                          <p>{comment.comment}</p>
                        </li>
                      ))
                      ) : (
                        <h3>No Comments</h3>
                      )}
                  </div>
              </div>
            </div>
          )
        }
        return <h3>Loading...</h3>
      }
    }
    