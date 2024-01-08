import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


function UpdateArticle() {
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

  return (
    <div>
      <form>
        <label>Name : </label>
        <input type='text' value={data.nom || ''} onChange={handleNom} />
        <label>Price : </label>
        <input type='text' value={data.prix || ''} onChange={handlePrix}/>
        <label>Stock : </label>
        <input type='text' value={data.stock || ''} onChange={handleStock}/>
        {/* il reste le button de validation */}
      </form>
    </div>
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
