import React from 'react'

function Home({article,setArticles}) {


  function handleDelete(id) {
    fetch(`http://localhost:3004/articles/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const deleteArticle = article.filter((articles) => articles.id !== id);
      setArticles(deleteArticle);
      });
  }

    const myArticles= article.map((articles)=>(
        <div key={articles.id}>
      <h2>{articles.title}</h2>
      <img src={articles.urlToImage} alt="url"/>
      <h4>Article By: {articles.author}</h4>
      <p>{articles.content}<a href={articles.url}>Read More</a></p>
      <button onClick={(e) => (
                 handleDelete(articles.id))}>Delete</button>

    </div>
    ))
  return (
    <div>{myArticles}</div>
  )
}

export default Home