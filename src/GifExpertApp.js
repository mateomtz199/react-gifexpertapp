import { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);
  /* const handleAdd = () => {
    //setCategories(["Mairimashita", ...categories]);
    setCategories((cats) => [...cats, "Mairimashita"]);
  } */ return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
