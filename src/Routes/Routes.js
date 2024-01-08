import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ArticlesListes from '../components/ArticlesListes';
import EditArticle from '../pages/UpdateArticle';
import DeleteArticle from '../pages/DeleteArticle';
import CreateteArticle from '../pages/CreateArticle';

function AppRoutes() {
  return (
    <Routes>    
      <Route path='/' element={<ArticlesListes/>} />
      <Route path='/UpdateArticle/:id' element={<EditArticle/>} />
      <Route path='/DeleteArticle/:id' element={<DeleteArticle/>} />
      <Route path='/CreateArticle' element={<CreateteArticle/>} />
    </Routes>
  )
}

export default AppRoutes
