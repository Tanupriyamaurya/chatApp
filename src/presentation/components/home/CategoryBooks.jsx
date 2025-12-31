import React from "react";
import BookSection from "./BookSection";

const CategoryBooks = ({ title, books, type }) => {
  if (!books || books.length === 0) return null;

  const formattedItems = books.map((item) => {
    if (type === "Author & Corner") {
      return {
        id: item.id,
        title: item.name,
        author: item.bio,
        image: item.image,
        extra: item.books.join(", "),
      };
    } else if (type === "Notes & Guide" || type === "E-Books") {
      return {
        id: item.id,
        title: item.title,
        author: item.author,
        image: item.image,
        type: item.type,
        availability: item.availability,
        price: item.price,
      };
    }
    return item; 
  });

  return <BookSection title={title} books={formattedItems} />;
};

export default CategoryBooks;
