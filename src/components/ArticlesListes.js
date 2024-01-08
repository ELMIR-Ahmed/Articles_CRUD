import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Article from './Article'
import '../style/Article-liste.css'
import Header from './Header'

function ArticlesListes() {
  const data = useSelector(state => state.articles)
  const dispatch = useDispatch()
  return (
    <div className='Article-liste'>
        <Header/>
        {data.map((article) => (
          // <div key={article.id} style={{"border" : "2px solid black", "padding": "10px", "borderRadius" : "10px", "margin" : "10px"}}>
          //   <p>Article : {article.id} | <Link to={'/EditArticle/${article.id}'}>Update</Link>  |  <Link to={'/DeleteArticle/${article.id}'}>DELETE</Link> </p>
          //   <li style={{"marginLeft" : "20px"}} >id : {article.id} </li>
          //   <li style={{"marginLeft" : "20px"}} >nom : {article.nom} </li>
          //   <li style={{"marginLeft" : "20px"}} >prix : {article.prix} </li>
          //   <li style={{"marginLeft" : "20px"}} >stock : {article.stock} </li>
          // </div>
          <Article key={article.id} data={article}/>
        ))}
    </div>
  )
}

export default ArticlesListes
