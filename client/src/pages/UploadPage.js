import React, { Component } from 'react';
import TextInput from '../components/TextInput'
import { __UploadPost } from '../services/PostServices'

class UploadPage extends Component {
   constructor() {
       super()
       this.state = {
           title: '',
           location:'',
           image_url: '',
           description: ''
       }
   }
   
   handleChange = ({ target }) => {
       this.setState({ [target.name]: target.value })
   }

   handleSubmit = async (event) => {
       event.preventDefault()
       try{
        await __UploadPost(this.state, this.props.currentUser._id)
        this.props.history.push('profile')
       }catch (error) {
           throw error
       }
   }

    render() {
        const{ title, location, image_url, description } = this.state
        return (
        <div className="upload">
                <div onSubmit={this.handleSubmit}>
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
                    <button className="btn waves-effect waves-light pink darken-4" type="submit" name="action" > 
                        <i className="material-icons right">send</i>Upload</button>
                </div>
        </div>
        )
    }
}

export default UploadPage