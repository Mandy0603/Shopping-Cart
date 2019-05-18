import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProducts } from "../../services/shelf/actions";

import Spinner from "../Spinner";
import ShelfHeader from "./ShelfHeader";
import ProductList from "./ProductList";

import "./style.scss";

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  };
  state = {
    isLoding: false
  };
  //   componentDidMount() {
  //     this.handleFetchProducts();
  //   }
  //   compoenntWillReceiveProps(nextProps) {
  //     const { filters: nextFilters, sort: nextSort } = nextProps;
  //     if (nextFilters !== this.props.filters) {
  //       this.handleFetchProducts(nextFilters, undefined);
  //     }
  //     if (nextSort !== this.props.sort) {
  //       this.handleFetchProducts(undefined, nextSort);
  //     }
  //   }

  //   handleFetchProducts = (
  //     filters = this.props.filters,
  //     sort = this.props.sort
  //   ) => {
  //     this.setState({ isLoding: true });
  //     this.props.fetchProducts(filters, sort, () => {
  //       this.setState({ loading: false });
  //     });
  //   };
  render() {
    // const { products } = this.props;
    // const { isLoding } = this.state;
    // return (
    //   <React.Fragment>
    //     {isLoding && <Spinner />}
    //     <div>
    //       <ShelfHeader productsLength={products.length} />
    //       <ProductList products={products} />
    //     </div>
    //   </React.Fragment>
    // );
    return (
      <React.Fragment>
        <div>
          <ShelfHeader />
          <ProductList />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  products: state.shelf.products
  // filters: state.filters.items,
  // sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);
