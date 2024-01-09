import React, { useState } from 'react'
import Header from '../components/Header'
import '../style/Header.css'
import '../style/createArticle.css'
import { useDispatch, useSelector } from 'react-redux'
import { add_article } from '../redux/actionCreators/actionCreators'
import { useNavigate } from 'react-router-dom'

function CreateArticle() {
  
  const data = useSelector(state => state.articles)
  const [newArticle, setNewArticle] = useState({"id" : "", "nom" : "", "prix" : "", "stock" : ""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleName = (e) => {
    if (data.length < 1) {
        setNewArticle({...newArticle, nom : e.target.value, id : 1})
        return;
    }
    setNewArticle({...newArticle, nom : e.target.value, id : data[data.length - 1].id + 1})
  }  
  const handlePrice = (e) => {
    setNewArticle({...newArticle, prix : e.target.value})
  }  
  const handleStock = (e) => {
    setNewArticle({...newArticle, stock : e.target.value})
  }
  const handleAddButton = () => {
    dispatch(add_article(newArticle))
    navigate('/')
  }

  return (
    <>
      <Header/>
      <div className='container'>
        <div className='update-page'>
          <form className='edit-form'>
            <label>Id : </label>
            <input type='text' value={newArticle.id} disabled={true}/>
            <label>Name : </label>
            <input type='text' value={newArticle.nom} onChange={handleName}/>
            <label>Price : </label>
            <input type='text' value={newArticle.prix} onChange={handlePrice}/>
            <label>Stock : </label>
            <input type='text' value={newArticle.stock} onChange={handleStock}/>
            <button type='button' onClick={handleAddButton}>Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateArticle
