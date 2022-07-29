import React from 'react'
import { useEffect,useState } from 'react'
import Home from './Home'
import PostBlog from './PostBlog'
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
// Importing all the components and UI naterial needed



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
      <NavBar/>
      <Routes>
      {/* creating routes to render the page */}
      <Route path="/" element= {<Home article={article} setArticles={setArticles} />}></Route>
      <Route path="/postblog" element= {<PostBlog addArticle={addArticle} />}></Route>
      </Routes>
      <Footer/>
      </div>
   
  )
}

export default App