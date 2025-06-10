import React from "react";
import CategoryItem from "./CategoryItem";
function QuizzesContainer() {
  const examCategories = [
    {
      url: "/numerical-ability",
      image: "/cs-mock-exam/images/categories/numerical.jpg",
      title: "Numerical Ability",
      description:
        "Basic operations, word problems, ratios, unit conversions, interest calculations, and real-life math scenarios.",
    },
    {
      url: "/analytical-ability",
      image: "/cs-mock-exam/images/categories/analytical.jpg",

      title: "Analytical Ability",
      description:
        "Logic, pattern recognition, word associations, data interpretation, assumptions, conclusions, and reasoning.",
    },
    {
      url: "/verbal-ability",
      image: "/cs-mock-exam/images/categories/verbal.png",

      title: "Verbal Ability",
      description:
        "English grammar, sentence structure, vocabulary, paragraph organization, and reading comprehension.",
    },
    {
      url: "/clerical-ability",
      image: "/cs-mock-exam/images/categories/clerical.png",

      title: "Clerical Ability",
      description:
        "Filing rules, spelling, sequencing, and attention to detail often required in clerical tasks.",
    },
    {
      url: "/general-information",
      image: "/cs-mock-exam/images/categories/general.jpg",

      title: "General Information",
      description:
        "Philippine Constitution, government structure, ethical standards, human rights, and environmental awareness.",
    },
  ];

  return (
    <div className="container mx-auto text-gray-900 my-12">
      <h1 className="text-center font-semibold text-3xl mb-6">
        Your Gateway to Civil Service Success
      </h1>
      <section className="grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {examCategories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </section>
    </div>
  );
}

export default QuizzesContainer;
