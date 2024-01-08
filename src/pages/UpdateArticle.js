import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { update_article } from '../redux/actionCreators/actionCreators'
import { useNavigate } from 'react-router-dom';
import '../style/updateArticle.css'
import Header from '../components/Header';


function UpdateArticle() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const dataAmodifier = useSelector(state => state.articles)
  const {id} = useParams()

  useEffect(()=>{
    const articleToUpdate = dataAmodifier.find(article => String(article.id) === id)
    setData(articleToUpdate || {})
  }, [dataAmodifier, id])

  const handleNom = (e) => {
    setData({...data, "nom" : e.target.value})
  }

  const handlePrix = (e) => {
    setData({...data, "prix" : e.target.value})
  }

  const handleStock = (e) => {
    setData({...data, "stock" : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update_article(data))
    navigate('/')
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <div className='update-page'>
        <form className='edit-form'>
          <label>Name : </label>
          <input type='text' value={data.nom || ''} onChange={handleNom} />
          <label>Price : </label>
          <input type='text' value={data.prix || ''} onChange={handlePrix}/>
          <label>Stock : </label>
          <input type='text' value={data.stock || ''} onChange={handleStock}/>
          <button type='button' onClick={handleSubmit}>Modifier</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateArticle







// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const UpdateArticle = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/path-vers-votre-page');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Cliquez-moi</button>
//     </div>
//   );
// };

// export default UpdateArticle;
