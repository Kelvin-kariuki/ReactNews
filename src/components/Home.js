import React from 'react'
import Button from '@mui/material/Button'
// Importing UI component

function Home({ article, setArticles }) {
  // Creating a function for Articles and API fetch delete
  // http://localhost:3004/articles/${id}
  function handleDelete(id) {
    fetch(`https://protected-citadel-60430.herokuapp.com/articles/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        const deleteArticle = article.filter((articles) => articles.id !== id)
        setArticles(deleteArticle)
      })
  }
// Declaring the const and rendering to page
  const myArticles = article.map((articles) => (
    <div
      key={articles.id}
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h2>{articles.title}</h2>
      <img src={articles.urlToImage} alt="url" />
      <h4>Article By: {articles.author}</h4>
      <p>
        {articles.content}
        <a href={articles.url}>Read More</a>
      </p>

      <Button
        variant="contained"
        color="success"
        onClick={(e) => handleDelete(articles.id)}
        style={{ margin: '10px 0', width: '20%', height: '30px', top: '10px' }}
      >
        Delete Post
      </Button>
    </div>
  ))
  return <div>{myArticles}</div>
}

export default Home
