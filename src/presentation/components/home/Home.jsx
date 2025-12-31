import { useState } from "react";
import { styled, Box } from "@mui/material";
import CategoryRow from "./CategoryRow";
import CarouselComponent from "./CarouselComponent";
import CategoryBooks from "./CategoryBooks";
import AuthorCorner from "./AuthorCorner";
import HomeFooter from "./HomeFooter";
import {
  schoolBooks,
  collegeBooks,
  competitiveBooks,
  eBooks,
  notesAndGuides,
  authorCorner,
} from "../../../data/data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const categoryMap = {
    "School Books": schoolBooks,
    "College Books": collegeBooks,
    "Competitive Exams": competitiveBooks,
    "E-Books": eBooks,
    "Notes & Guides": notesAndGuides,
  };

  return (
    <>
      <CategoryRow onCategoryClick={setSelectedCategory} />


      {!selectedCategory && (
        <Component>
          <CarouselComponent />
        </Component>
      )}


      

      {selectedCategory && categoryMap[selectedCategory] && (
        <CategoryBooks
          title={selectedCategory}
          books={categoryMap[selectedCategory]}
          type={selectedCategory}
        />
      )}
      {selectedCategory === "Author Corner" && (
        <AuthorCorner authors={authorCorner} />
      )}

      <HomeFooter />
    </>
  );
};

export default Home;

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

