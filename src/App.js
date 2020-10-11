import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import data from "./Data";
import Context from "./Context";

import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import ProductScreen from "./components/ProductScreen";
import CatalogScreen from "./components/CatalogScreen";
import Delivery from "./components/Delivery";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      products: [],
      catalogs: [],
      cart: {},
      tags: [],
      dataCoupons: [],
    };
    this.routerRef = React.createRef();
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    let products = localStorage.getItem("products");
    let catalogs = localStorage.getItem("catalogs");
    let cart = localStorage.getItem("cart");
    let tags = [];
    let dataCoupons = [];

    user = user ? JSON.parse(user) : null;
    products = products ? JSON.parse(products) : data.initProducts;
    catalogs = catalogs ? JSON.parse(catalogs) : data.initCatalogs;
    tags = data.initTags;
    cart = cart ? JSON.parse(cart) : {};
    dataCoupons = data.initCoupons;

    this.setState({ user, products, catalogs, tags, cart, dataCoupons });
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    this.setState({ products }, () => callback && callback());
  };

  login = (usn, pwd) => {
    let user = data.users.find((u) => u.username === usn && u.password === pwd);
    if (user) {
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    data.users.push({ username: "sdf" });
    const cart = this.state.cart;
    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;
      }
      return p;
    });
    this.setState({ products });
    this.clearCart();
    this.routerRef.current.history.push("/");
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <b className="navbar-item is-size-4 "><Link to="/">ecommerce</Link></b>
                <button
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div
                className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}
              >
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product" className="navbar-item">
                   Добавить товар 
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Корзина
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    {Object.keys(this.state.cart).length}
                  </span>
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                ) : (
                  <button className="navbar-item" onClick={this.logout}>
                    Logout
                  </button>
                )}
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/delivery" component={Delivery} />
              <Route exact path="/products">
                <Redirect to="/" />
              </Route>
              <Route exact path="/products/:id" component={ProductScreen} />
              <Route exact path="/catalog/:id" component={CatalogScreen} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
