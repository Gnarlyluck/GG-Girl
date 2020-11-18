import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetPost } from '../services/PostServices'
import TextInput from '../components/TextInput'
import {__PostComment, __ShowComments } from '../services/CommentService'
// import { index } from '../../../db/models/GG-user'


export default class Gossip extends Component {
    constructor() {
      super()
      this.state = {
        post: null,
        comment: '',
        comments: []
      }
    }

    componentDidMount() {
        this.getPost()
      }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (event) => {
      event.preventDefault()
      try{
          console.log(this.props)
          await __PostComment (this.state,  
            this.props.currentUser._id, 
            this.props.match.params.post_id)
            this.props.history.push('comments')
      }catch (error){
          throw error
      }
    }
 
    showComments = async () => {
      try{
        const comments = await __ShowComments(this.props.match.params.post_id)
        this.setState({comments: comments})
      }catch (error) {
        throw error
      }
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
      const { post, comment } = this.state
      if (this.state.post) {
        return (
          <div className="Gossip">
            <div className="row"> 
              <div className="col s6  ">
                <div className="card">
                  <div className="card-image">
                    <img src={post.image_url} alt="post" />
                    <span className="card-title">{post.title}</span>
                  </div>
                  <div className="card-content pink darken-4">
                    <p>{post.description}</p>
                  </div>
                  <div className="card-action pink darken-4">
                    <p onClick={this.showComments} >Comments </p>
                    <form onSubmit={this.handleSubmit}>
                      <TextInput 
                        name="comment"
                        value={comment}
                        onChange={this.handleChange}
                        placeholder="Write a comment"
                        type="text"
                      />
                    </form>
                      {this.state.comments.map((comment, index) => (
                        <h3 key={index}>
                          {comment.comment}
                        </h3>
                      ))}
                        <p>Likes</p>
                        <p>{post.popularity_rating}</p>
                  </div>
                </div>
                  <div>
                    {post.comments.length ? (
                      post.comments.map((comment, index) => (
                        <li className="comment-item" key={index}>
                          <p><Link>{comment.user_id}</Link></p>
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
    