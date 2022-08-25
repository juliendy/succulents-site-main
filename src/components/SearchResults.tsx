import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../data/ProductData";
import ProductListPaper from "./reusableComponents/ProductListPaper";
import ProductListContainer from "./reusableComponents/ProductListContainer";

type Params = {
  query: string;
};

export default function SearchResults() {
  var selectedCategory: any[] = [];

  const { query } = useParams<Params>();

  ProductData.forEach((product) => {
    var productName = product.name.toLowerCase();
    if (productName.includes(query.toLowerCase())) {
      selectedCategory.push(
        <ProductListPaper
          key={product.id}
          id={product.id}
          category={product.category}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      );
    }
  });

  return (
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <div className="search-results-text">
        {selectedCategory.length} RESULTS FOR '{query.toUpperCase()}'
      </div>
      <ProductListContainer>
        <React.Fragment>{selectedCategory}</React.Fragment>
      </ProductListContainer>
    </div>
  );
}
