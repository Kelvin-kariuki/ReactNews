import React from 'react'
import { useEffect,useState } from 'react'
import Home from './Home'
import PostBlog from './PostBlog'
import { Route, Routes } from "react-router-dom";


function App(){
const [article, setArticles]=useState([])

function addArticle(newArticle) {
  setArticles([...article, newArticle])
} 

useEffect(() => {
  fetch("http://localhost:3004/articles")
  .then(response => response.json())
  .then((data) => {
    setArticles(data)
  
  })
}, [])

console.log({article})

  return (
    <div>
    <Routes>
    <Route path="/" element= {<Home article={article} setArticles={setArticles} />}></Route>
    <Route path="/postblog" element= {<PostBlog addArticle={addArticle}/>}></Route>
    </Routes>
    </div>
   
  )
}

export default App