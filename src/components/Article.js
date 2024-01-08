import React from 'react'
import "../style/Article.css"
import { Link } from 'react-router-dom'

function Article(props) {
  return (
    <div className='Article-component'>
      <div className='Article'>
        <div className='id-box'>
          <h3> {props.data.id} </h3>
        </div>
        <p> <strong>Name :</strong> {props.data.nom} </p>
        <p> <strong> Price :</strong> {props.data.prix} </p>
        <p> <strong>Stock :</strong> {props.data.stock} </p>
        <div className='buttons'>
          <Link className='button' to={'/UpdateArticle/'+props.data.id}>Modifier</Link>
          <Link className='button' to={'/DeleteArticle/'+props.data.id}>Supprimer</Link>
        </div>
      </div>
    </div>
  )
}

export default Article
