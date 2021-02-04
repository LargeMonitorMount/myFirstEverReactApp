import React, { Component, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { Box, Button, Input, TextField } from '@material-ui/core'
import { db } from './Firebase'
import firebase from 'firebase'

function CreateAPost(props) {
    const [text, settext] = useState('')
   
    const [title, setTitle] = useState('')
   
    const handleChange1 =(e) => {
        setTitle(e.target.value);
    }
    const handleChange2 =(e) => {
        settext(e.target.value);
    }
    const uploadText = () => {
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            title: title,
            text: text,
            username: props.username.displayName
        });
        setTitle('');
        settext('');
    }
    
        return (
            <Box boxShadow={3}>
                <FormControl fullWidth margin='dense'>
                  <FormLabel>Posztolj vmit</FormLabel>
                    
                    <Input onChange={handleChange1} value={title} color="primary" placeholder="Title" />
                    <TextField onChange={handleChange2} value={text} color="primary" variant="filled" placeholder="Text" multiline  rows={4}/>
                    <Button color="primary" variant="outlined" onClick={uploadText} type="submit">Submit</Button>
                  
                </FormControl>
            </Box>
        )
    
}

export default CreateAPost

