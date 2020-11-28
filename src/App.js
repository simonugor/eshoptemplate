import React, { useState } from "react"
//importing components
import Header from "./components/Header/Header.js"
import Navbar from "./components/Navbar/Navbar.js"
import Navbar2 from "./components/Navbar2/Navbar2.js"
import Home from "./components/Home/Home.js"
import Products from "./components/Products/Products.js"
import Tshirts from "./components/Tshirts/Tshirts.js"
import Hoodies from "./components/Hoodies/Hoodies.js"
import Pants from "./components/Pants/Pants.js"
import ProductPage from "./components/ProductPage/ProductPage.js"
import Cart from "./components/Cart/Cart.js"
import Wishlist from "./components/Wishlist/Wishlist.js"
import PopUp from "./components/PopUp/PopUp.js"
import SearchedItems from "./components/searchedItems/searchedItems.js"
//importing all products
import Data from "./ProductsData/ProductsData.js"

//importing react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import data from "./ProductsData/ProductsData.js"
import { stat } from "fs"


function App() {

  const [productsData, setProductsData] = useState(Data)

  const [cartData, setCartData] = useState([])
  const [wishlistData, setWishlistData] = useState([])

  const [filtered, setFiltered] = useState([])

  const [homeStyle, setHomeStyle] = useState("red")
  const [productsStyle, setProductsStyle] = useState("")
  const [tshirtsStyle, setTshirtsStyle] = useState("")
  const [hoodiesStyle, setHoodiesStyle] = useState("")
  const [pantsStyle, setPantsStyle] = useState("")
  const [cartStyle, setCartStyle] = useState("")
  const [wishlistStyle, setWishlistStyle] = useState("")

  const [productPageHeading, setProductPageHeading] = useState("")
  const [productPagePrice, setProductPagePrice] = useState("")
  const [productPageDesc, setProductPageDesc] = useState("")

  const [popupDisplay, setPopupDisplay] = useState("none")
  const [popupText, setPopupText] = useState("")

  const productClick = (product) => {
    productsData.map(data => {
      if (product === data.name) {
        setProductPageHeading(data.name)
        setProductPagePrice(data.price)
        setProductPageDesc(data.description)
      }
      return data
    })
  }

  const cartColor = () => {
    setHomeStyle("")
    setProductsStyle("")
    setTshirtsStyle("")
    setHoodiesStyle("")
    setPantsStyle("")
    setWishlistStyle("")
    setCartStyle("red")
  }

  const wishlistColor = () => {
    setHomeStyle("")
    setProductsStyle("")
    setTshirtsStyle("")
    setHoodiesStyle("")
    setPantsStyle("")
    setCartStyle("")
    setWishlistStyle("red")
  }

  const goBackButton = () => {
    setHomeStyle("red")
    setProductsStyle("")
    setTshirtsStyle("")
    setHoodiesStyle("")
    setPantsStyle("")
    setCartStyle("")
    setWishlistStyle("")
  }

  const changeStyle = (id) => {
    if (id === "products") {
      setHomeStyle("")
      setTshirtsStyle("")
      setHoodiesStyle("")
      setPantsStyle("")
      setWishlistStyle("")
      setCartStyle("")
      setProductsStyle("red")
    } else if (id === "home") {
      setHomeStyle("red")
      setProductsStyle("")
      setWishlistStyle("")
      setCartStyle("")
      setTshirtsStyle("")
      setHoodiesStyle("")
      setPantsStyle("")
    } else if (id === "tshirts") {
      setHomeStyle("")
      setProductsStyle("")
      setWishlistStyle("")
      setTshirtsStyle("red")
      setCartStyle("")
      setHoodiesStyle("")
      setPantsStyle("")
    } else if (id === "hoodies") {
      setHomeStyle("")
      setProductsStyle("")
      setTshirtsStyle("")
      setWishlistStyle("")
      setHoodiesStyle("red")
      setCartStyle("")
      setPantsStyle("")
    } else if (id === "pants") {
      setHomeStyle("")
      setProductsStyle("")
      setTshirtsStyle("")
      setHoodiesStyle("")
      setWishlistStyle("")
      setCartStyle("")
      setPantsStyle("red")
    }
  }

  const cartAdd = (heading, price) => {
    setCartData([...cartData, {name: heading, price: price}])
    setPopupText("Added to cart")
    setPopupDisplay("")
    setTimeout(() => {setPopupDisplay("none")}, 800)
  }

  const wishlistAdd = (heading, price) => {
    setWishlistData([...wishlistData, {name: heading, price: price}])
    setPopupText("Added to wishlist")
    setPopupDisplay("")
    setTimeout(() => {setPopupDisplay("none")}, 800)
  }

  const deleteItem = (name) => {
    setCartData((state) => state.filter((item) => item.name !== name))
  }

  const deleteWishlistItem = (name) => {
    setWishlistData((state) => state.filter((item) => item.name !== name))
  }

  const handleSearch = (text) => {
    //setting every style to default
    setHomeStyle("")
    setTshirtsStyle("")
    setHoodiesStyle("")
    setPantsStyle("")
    setWishlistStyle("")
    setCartStyle("")
    setProductsStyle("")

    //filtering items
    const filteredItems = data.filter(d => {
      return d.name.toLowerCase().includes(text.toLowerCase())
    })
    setFiltered(filteredItems)
  }

  return (
    <div className="App">
      <Router>
        <PopUp display={popupDisplay} text={popupText} />
        <Header />
        <Navbar
          cartColor={cartColor}
          wishlistColor={wishlistColor}
          cartStyle={cartStyle}
          wishlistStyle={wishlistStyle}
          handleSearch={handleSearch}
        />
        <Navbar2 
          changeStyle={changeStyle}
          homeStyle={homeStyle}
          productsStyle={productsStyle}
          tshirtsStyle={tshirtsStyle}
          hoodiesStyle={hoodiesStyle}
          pantsStyle={pantsStyle}
        />
        <Switch>
          <Route exact path="/eshoptemplate/">
            <Home changeStyle={changeStyle} data={productsData} productClick={productClick} />
          </Route>
          <Route exact path="/products">
            <Products data={productsData} productClick={productClick} />
          </Route>
          <Route exact path="/tshirts">
            <Tshirts data={productsData} productClick={productClick} />
          </Route>
          <Route exact path="/hoodies">
            <Hoodies data={productsData} productClick={productClick} />
          </Route>
          <Route exact path="/pants">
            <Pants data={productsData} productClick={productClick} />
          </Route>
          <Route exact path="/productpage">
            <ProductPage 
              heading={productPageHeading} 
              price={productPagePrice} 
              description={productPageDesc}
              goBack={goBackButton}
              cartAdd={cartAdd}
              wishlistAdd={wishlistAdd}
            />
          </Route>
          <Route exact path="/cart">
            <Cart data={cartData} deleteItem={deleteItem} />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist data={wishlistData} cartAdd={cartAdd} deleteItem={deleteWishlistItem} />
          </Route>
          <Route exact path="/search">
            <SearchedItems data={filtered} productClick={productClick} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
