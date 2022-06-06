import './App.scss';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
// import Home from './components/Home'
import About from './components/About'
import MainContent from './components/MainContent'
// import Product from './components/Product'
// import BukuTamu from './components/BukuTamu'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout'

function App() {
  return (
    <>
     
      <Header/>
      <MainContent/>
      <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} /> */}
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/bukutamu" component={BukuTamu} />
        <Redirect to="/" /> */}
      </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;