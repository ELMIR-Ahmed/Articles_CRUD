import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/actionTypes";

const initialState = {
  articles : [
    {
      "id": 1,
      "nom": "Smartphone X",
      "prix": 499.99,
      "stock": 50
    },
    {
      "id": 2,
      "nom": "Ordinateur Portable Y",
      "prix": 899.00,
      "stock": 30
    },
    {
      "id": 3,
      "nom": "Casque Audio Z",
      "prix": 79.99,
      "stock": 100
    },
    {
      "id": 4,
      "nom": "Caméra HD",
      "prix": 199.50,
      "stock": 20
    },
    {
      "id": 5,
      "nom": "Enceinte Bluetooth",
      "prix": 69.95,
      "stock": 80
    },
    {
      "id": 6,
      "nom": "Caméra HD",
      "prix": 199.50,
      "stock": 20
    },
    {
      "id": 7,
      "nom": "Enceinte Bluetooth",
      "prix": 69.95,
      "stock": 80
    },
    {
      "id": 8,
      "nom": "Enceinte Bluetooth",
      "prix": 69.95,
      "stock": 80
    }
  ]
}

export default function articlesReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles : [...state.articles, action.payload]}
    case DELETE_ARTICLE:
      return {
        ...state, articles : [...state.articles.filter(article => article.id !== action.payload)]
      }
    default:
      return state
  }
}