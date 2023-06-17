import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [product, setProductData] = useState([]);
  const [nav, setNav] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [final, setFinal] = useState(0);
  const [hide, setHide] = useState(true);
  const [loading, setLoader] = useState(true);
  const [search, setSearch] = useState([]);
  const initialstate = {
    productList: [],
    card: [],
    total: [],
    details: [],
  };
   
  useEffect(() => {
    productsFetch();
  }, [category]);
  useEffect(() => {
    NavFetch();
  }, []);
  useEffect(() => {
    setProductData();
  }, []);
  useEffect(() => {
       searchfetch();
    dispatch({ type: "GET_PRODUCT", payload: search });
  }, [filter]);
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: product });
  }, [product]);
  useEffect(() => {
    productsFetch;
  }, []);
  const NavFetch = async () => {
    const apiFetch = await fetch("https://dummyjson.com/products/categories");
    const data = await apiFetch.json();
    setNav(data);
    setLoader(false);
  };
  const searchfetch = async () => {
    const apifetch = await fetch(
      `https://dummyjson.com/products/search?q=${filter}`
    );
    const { products } = await apifetch.json();
    setSearch(products);
    // console.log(search);
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  const productsFetch = async () => {
    const apiFetch = await fetch(`https://dummyjson.com/products${category}`);
    const { products } = await apiFetch.json();
    setProductData(products);
  };
  const data = {
    state,
    dispatch,
    product,
    setProductData,
    nav,
    setNav,
    category,
    setCategory,
    filter,
    setFilter,
    final,
    setFinal,
    hide,
    setHide,
    loading,
    setLoader,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
