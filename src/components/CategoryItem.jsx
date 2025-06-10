import React from "react";
import darkPlaceholder from "/images/placeholders/dark-placeholder.jpg";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <Link
      to={`/category${category.url}`}
      state={{ title: category.title }}
      className="max-w-md w-full mx-auto md:max-w-full"
    >
      <div className="rounded-xl  h-full shadow-[0px_0px_23px_-2px_rgba(0,_0,_0,_0.2)] cursor-pointer overflow-hidden  duration-400 ease-in-out hover:scale-101 hover:shadow-[0px_0px_23px_-2px_rgba(0,_0,_0,_0.4)] hover:rotate-1">
        <div className="space-y-2 p-4">
          <img
            src={category.image || darkPlaceholder}
            alt=""
            className="border border-gray-200 w-full h-45 object-contain rounded-md object-center"
          />
          <h3 className="text-xl font-medium">{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;
