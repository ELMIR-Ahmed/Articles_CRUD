import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { delete_article } from '../redux/actionCreators/actionCreators'

function DeleteArticle() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(delete_article(Number(id)));
    navigate('/');
  }, [id, navigate, dispatch]);
  

  return (
    <div>
      
    </div>
  )
}

export default DeleteArticle
