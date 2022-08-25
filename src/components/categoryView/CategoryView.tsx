import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryData } from "../../data/CategoryData";
import SortSelect from "./SortSelect";
import ProductList from "./ProductList";
import NotFoundPage from "../NotFoundPage";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();
  var selectedCategory: any[] = [];

  const [sortState, setSortState] = useState<{
    sort: string;
    name: string;
  }>({
    sort: "Best selling",
    name: "sort",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof sortState;
    setSortState({
      ...sortState,
      [name]: event.target.value,
    });
  };

  CategoryData.forEach((item) => {
    if (item.categoryName === categoryName) {
      selectedCategory.push(
        <div key={item.categoryName}>
          <div className="category-name">{item.categoryName}</div>
          <p className="category-description">{item.description}</p>
        </div>
      );
    }
  });

  if (CategoryData.map((a) => a.categoryName).includes(categoryName))
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
          {selectedCategory}
          <SortSelect onChange={handleChange} value={sortState.sort} />
          <ProductList sortState={sortState} />
      </div>
    );
  else return (
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <NotFoundPage />
    </div>
  );
}
