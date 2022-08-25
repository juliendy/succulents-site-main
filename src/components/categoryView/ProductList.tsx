import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../data/ProductData";
import ProductListPaper from "../reusableComponents/ProductListPaper";
import ProductListContainer from "../reusableComponents/ProductListContainer";

type Params = {
  categoryName: string;
};

type sortProps = {
  sortState: { sort: string; name: string };
};

export default function ProductList({ sortState }: sortProps) {
  function FormRow({ sortState }: sortProps) {
    const { categoryName } = useParams<Params>();
    var selectedProduct: any[] = [];

    const [sortedProduct, setSortedProduct] = useState<any[]>([]);

    useEffect(() => {
      if (sortState.sort === "Best selling") {
        setSortedProduct(ProductData.sort((a, b) => b.sold - a.sold));
      } else if (sortState.sort === "Price, high to low") {
        setSortedProduct(ProductData.sort((a, b) => b.price - a.price));
      } else if (sortState.sort === "Price, low to high") {
        setSortedProduct(ProductData.sort((a, b) => a.price - b.price));
      } else {
        setSortedProduct(
          ProductData.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        );
      }
    }, [sortState.sort]);

    sortedProduct.forEach((product) => {
      if (product.category === categoryName) {
        selectedProduct.push(
          <ProductListPaper
            key={product.id}
            id={product.id}
            category={categoryName}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        );
      }
    });

    return <React.Fragment>{selectedProduct}</React.Fragment>;
  }

  return (
    <ProductListContainer>
      <FormRow sortState={sortState} />
    </ProductListContainer>
  );
}
