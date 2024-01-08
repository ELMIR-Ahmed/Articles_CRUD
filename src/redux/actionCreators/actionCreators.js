import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from "../actions/actionTypes"

export const add_article = (article) => {
  return {
    type :ADD_ARTICLE,
    payload : article 
  }
}

export const update_article = (updatedArticle) => {
  return {
    type : UPDATE_ARTICLE,
    payload : updatedArticle
  }
}

export const delete_article = (IdArticle) => {
  return {
    type : DELETE_ARTICLE,
    payload : IdArticle
  }
}