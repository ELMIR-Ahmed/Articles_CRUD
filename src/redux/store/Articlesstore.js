import { legacy_createStore as createStore} from "redux";
import articlesReducer from "../reducers/articlesReducer";

export const store = createStore(articlesReducer)