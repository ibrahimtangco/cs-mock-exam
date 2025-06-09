import React from "react";
import darkPlaceholder from "/images/placeholders/dark-placeholder.jpg";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <Link to={`/category${category.url}`} state={{ title: category.title }}>
      <div className="rounded-xl  h-full shadow-lg cursor-pointer overflow-hidden  duration-300 ease-in-out hover:scale-101">
        <div className="space-y-2 p-4">
          <img
            src={category.image || darkPlaceholder}
            alt=""
            className="border border-gray-200 w-full h-45 object-cover rounded-md"
          />
          <h3 className="text-xl font-medium">{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;
