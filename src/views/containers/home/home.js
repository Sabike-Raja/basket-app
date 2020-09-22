import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import MetaTags from "react-meta-tags";

import BannerImage from "../../../assets/images/grocery-shopping.png";
import { Products } from "../../components/product/product";
import {
  updateBasketCart,
  searchProduct,
} from "../../../stores/home/home_action";
import Constant from "../../../constants";

import "./home.css";

const Home = ({
  cartData,
  updateBasketCart,
  listOfProducts,
  searchProductAction,
}) => {
  const [search, updateSearch] = useState("");
  const { homePageProducts } = Constant;

  useEffect(() => {
    window.prerenderReady = false;
    fetch("https://run.mocky.io/v3/3f358af0-5e1e-4f57-bc0f-5aa204571cb0")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementsByTagName("META")[5].content = data.url;
        window.prerenderReady = true
      });
    // setTimeout(() => {
    //   document.getElementsByTagName("META")[5].content =
    //     "https://parva-backend-media-dev.s3.amazonaws.com/post_banners/tech.jpeg";
    // }, 2000);
  }, []);

  // add product to basket

  const addProduct = (selectedData) => {
    const newData = [...cartData];
    let isProductUpdated = false;
    newData.map((mapData) => {
      if (mapData.name === selectedData.name) {
        mapData.count += 1;
        isProductUpdated = true;
      }
      return null;
    });
    if (!isProductUpdated) {
      newData.push({ ...selectedData, count: 1 });
    }
    updateBasketCart(newData);
  };

  // remove product from basket

  const removeProduct = (selectedData) => {
    let newData = [...cartData];
    newData.map((mapData) => {
      if (mapData.name === selectedData.name) {
        mapData.count -= 1;
      }
      return null;
    });
    newData = newData.filter((filterData) => filterData.count > 0);
    updateBasketCart(newData);
  };

  // search product

  const searchProduct = (e) => {
    updateSearch(e.target.value);
    let newData = [...homePageProducts];
    newData = newData.filter((filterData) =>
      filterData.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    searchProductAction(newData);
  };

  return (
    <div className="mb-5">
      {/* <MetaTags>
        <title>Basket</title>
        <meta name="description" property="og:description" content="You can buy your groceries here" />
        <meta property="og:title" content="My editor" />
        <meta name="image" property="og:image" content="https://parva-backend-media-dev.s3.amazonaws.com/post_banners/tech.jpeg" />
      </MetaTags> */}
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Editor</title>
        <link
          rel="canonical"
          href="https://parva-backend-media-dev.s3.amazonaws.com/post_banners/tech.jpeg"
        />
      </Helmet> */}
      <div className="w-100">
        <img className="banner-image" src={BannerImage} alt="banner_image" />
      </div>
      <div className="align-items-center d-flex justify-content-center mt-5">
        <div className="search-product w-75">
          <Form.Control
            value={search}
            onChange={searchProduct}
            placeholder="Search Product"
          />
        </div>
      </div>
      <div>
        <Container className="w-75 p-0">
          <Link to={"/blog"}> Link to editor </Link>
          <div className="d-flex justify-content-center">
            <Products
              type="add"
              action={addProduct}
              productData={listOfProducts}
            />
            <Products
              action={removeProduct}
              emptyCart={() => {
                updateBasketCart([]);
              }}
              type="remove"
              productData={cartData}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

Home.propTypes = {
  updateBasketCart: PropTypes.func,
  cartData: PropTypes.array,
  listOfProducts: PropTypes.array,
  searchProductAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartData: state.home.cartData,
  listOfProducts: state.home.listOfProducts,
});

const mapDispatchToProps = (dispatch) => ({
  updateBasketCart: (data) => dispatch(updateBasketCart(data)),
  searchProductAction: (data) => dispatch(searchProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
