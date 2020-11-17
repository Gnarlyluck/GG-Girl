import React, { Component } from "react"
import {__PostComment } from '../services/CommentService'
import TextInput from '../components/TextInput'

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: ''
        }
    }
    
    
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target })
    }
    
    
    handleSubmit = async (event) => {
        event.preventDefault()
        try{
            console.log()
            await __PostComment (this.state,  this.props.currentUser._id)
            this.props.history.push('comments')
        }catch (error){
            throw error
        }
    }
    render() {
        const { comments } = this.state
        return (
            <div>
                <form>
                <TextInput 
                   name="comment"
                   value={comments}
                   onChange={this.handleChange}
                   placeholder="Write a comment"
                   />
                   <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action" > 
                      <i className="material-icons right">send</i>Post</button>
                </form>
            </div>
        )
    }
}
 export default Comments
