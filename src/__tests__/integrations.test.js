import React from "react";
import { mount } from "enzyme";

import moxios from "moxios";

import Root from "../Root";
import App from "../components/App";
import ShelfHeader from "../components/Shelf/ShelfHeader";
import Product from "../components/Shelf/ProductList/Product";
import CartProduct from "../components/FloatCart/CartProduct";

import { productsAPI } from "../services/util";

const productsMock = {
  products: [
    {
      id: 12,
      sku: 12064273040195392,
      title: "Cat Tee Black T-Shirt",
      description: "4 MSL",
      availableSizes: ["S", "XS"],
      style: "Black with custom print",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },
    {
      id: 13,
      sku: 51498472915966366,
      title: "Dark Thug Blue-Navy T-Shirt",
      description: "",
      availableSizes: ["M"],
      style: "Front print and paisley print",
      price: 29.45,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    }
  ]
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(productsAPI, {
    status: 200,
    response: productsMock
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe("integrations", () => {
  it("should fetch 2 products and add 1 to cart", done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(0);

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);

      expect(wrapped.find(CartProduct).length).toEqual(0);

      //   wrapped
      //     .find(Product)
      //     .at(0)
      //     .props().onClick();

      //   expect(wrapped.find(CartProduct).length).toEqual(1);

      wrapped.unmount();
      done();
    });
  });
});
