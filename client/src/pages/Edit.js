import React, { Component } from 'react';
import TextInput from '../components/TextInput'
import { __GetPost, __UpdatePost } from '../services/PostServices'



class Edit extends Component {
 constructor() {
    super()
        this.state = {
            title: '',
            location: '',
            image_url: '',
            description: ''
        }
}    

    componentDidMount() {
       this.getPost()
   }
    getPost = async () => {
        try {
            const post = await __GetPost(this.props.match.params.post_id)
            this.setState({
            title: post.title,
            description: post.title,
            image_url: post.image_url,
            location: post.location 
            })
        } catch (error) {
        throw error
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try{
            await __UpdatePost(this.state, this.props.match.params.post_id)
            this.props.history.push('/profile')
        }   catch (error) {
            throw error
        }
    }

    render() {
        const{ title, location, image_url, description } = this.state
       return (
           <div>
                <form onSubmit={this.handleSubmit}>
                   <TextInput 
                   name="title"
                   value={title}
                   onChange={this.handleChange}
                   placeholder="Title"
                   />
                    <TextInput 
                   name="location"
                   value={location}
                   onChange={this.handleChange}
                   placeholder="Location"
                   /> 
                   <TextInput 
                   name="image_url"
                   value={image_url}
                   onChange={this.handleChange}
                   placeholder="Upload your Image URL here "
                   />
                    <TextInput 
                   name="description"
                   value={description}
                   onChange={this.handleChange}
                   placeholder="Description"
                   fieldType="textfield"
                   />
                   <button>Edit</button>
               </form>
           </div>
        )
    }
}

export default Edit