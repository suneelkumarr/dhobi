// import './App.css';
import Header from './components/Header/Header'
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // const [ cart, setCart ] = useState([]);
	// const [ order, setOrder ] = useState([]);
	// const [ products, setProducts ] = useState([]);

	// useEffect(() => {
	// 	fetch('https://smart-dhopa-server.herokuapp.com/allOrders').then((res) => res.json()).then((data) => setOrder(data));
	// }, [order.length]);

	// useEffect(() => {
	// 	fetch('https://smart-dhopa-server.herokuapp.com/products').then((res) => res.json()).then((data) => setProducts(data));
	// }, [products.length]);

	// const contextData = { order, setOrder, products, setProducts };


  return (
   
			<Header />
  );
}

export default App;
