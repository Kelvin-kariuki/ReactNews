import React from 'react'
import { useEffect,useState } from 'react'
import Home from './Home'
import PostBlog from './PostBlog'
import {Route,Routes} from 'react-dom'


function App(){
const [article, setArticles]=useState([])

//const [searchCar,setSearch]=useState("")
 


{/*const search=(data)=>(
  data.filter((car)=>(car.Make.toLowerCase().includes(searchCar)) || (car.Model.toLowerCase().includes(searchCar))
)) 
*/}

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
    <div><Home article={article} setArticles={setArticles} />
    <PostBlog addArticle={addArticle}/>
    </div>
  )
}

export default App