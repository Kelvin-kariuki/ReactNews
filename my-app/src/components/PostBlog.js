import React from 'react'
import {useState} from 'react'

function PostBlog({addArticle}) {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [content, SetContent] = useState("")
    const [url, setUrl] = useState("")

    
     function handleSubmit(event) {
      event.preventDefault();
      let newArticle={
        title:title,
        author:author,
        urlToImage:image,
        url:url,
        content:content

       
      }
  
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
      setTitle("")
      setImage("")
      setUrl("")
      setAuthor("")
      SetContent("")
    }
  return (

    <div>
        <form>
            <input type="text" name="name" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" name="name" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author}/>
            <input type="text" name="name" placeholder="Content" onChange={(e) => SetContent(e.target.value)} value={content}/>
            <input type="text" name="name" placeholder="Image Url" onChange={(e) => setImage(e.target.value)} value={image}/>
            <input type="text" name="name" placeholder="Read More Url" onChange={(e) => setUrl(e.target.value)} value={url} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default PostBlog