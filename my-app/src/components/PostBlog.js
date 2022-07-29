import React from 'react'
import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
// Importing all the important components and material UI for react

function PostBlog({addArticle}) {
  // Declaring Variables for the blog post
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [content, SetContent] = useState("")
    const [url, setUrl] = useState("")

  // Creating a function for submit
     function handleSubmit(event) {
      event.preventDefault();
      let newArticle={
        title:title,
        author:author,
        urlToImage:image,
        url:url,
        content:content

       
      }
  // Initiating API post request. The DB is local
      fetch("http://localhost:3004/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle)
      })
      .then(response => response.json())
      .then(data => {
       addArticle(data) 
      })
      // Setting variables with empty strings
      setTitle("")
      setImage("")
      setUrl("")
      setAuthor("")
      SetContent("")
    }
  return (

    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
    }}>
    {/* Creating the table for post article */}
            <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} value={title} style={{ margin:"10px 10px",
       width:"50%",
      height:"40px"}}/>
            <TextField id="standard-basic" label="Image URL" variant="standard" onChange={(e) => setImage(e.target.value)} value={image} style={{ margin:"10px 10px",
       width:"50%",
      height:"40px"}}/>
            <TextField id="standard-basic" label="Author" variant="standard"  onChange={(e) => setAuthor(e.target.value)} value={author} style={{ margin:"10px 10px",
       width:"50%",
      height:"40px"}}/>
            <TextField id="standard-basic" label="Content" variant="standard" onChange={(e) => SetContent(e.target.value)} value={content} style={{ margin:"10px 10px",
       width:"50%",
      height:"40px"}}/>
            <TextField id="standard-basic" label="Read More URL" variant="standard" onChange={(e) => setUrl(e.target.value)} value={url} style={{ margin:"10px 10px",
       width:"50%",
      height:"40px"}} />
{/* Creating a button for Submit and putting correct CSS */}
<Button variant="contained" color="success" onClick={handleSubmit} style={{ margin:"10px 0",
       width:"20%",
      height:"30px",
      top:"10px" }}>
  Submit News
</Button>
        
    </div>
  )
}

export default PostBlog