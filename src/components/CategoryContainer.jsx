import React from "react";
import CategoryItem from "./CategoryItem";

function QuizzesContainer() {
  const examCategories = [
    {
      url: "/general-information",
      image: "/images/categories/generalinformation.png",
      title: "General Information",
      description:
        "Current events, Philippine Constitution, government structure, and Code of Conduct.",
    },
    {
      url: "/vocabulary-grammar",
      image: "/images/categories/vocabularygrammar.png",
      title: "Vocabulary & Grammar",
      description:
        "Questions on word meanings, sentence structure, tenses, and grammar usage.",
    },
    {
      url: "/reading-comprehension",
      image: "/images/categories/readingcomprehension.png",
      title: "Reading Comprehension",
      description:
        "Passages with questions testing understanding and interpretation in English.",
    },
    {
      url: "/analogy-logic",
      image: null,
      title: "Analogy & Logic",
      description:
        "Identifying relationships, patterns, sequences, and drawing logical conclusions.",
    },
    {
      url: "/numeric-ability",
      image: null,
      title: "Numerical Ability",
      description:
        "Arithmetic problems, percentages, ratios, data interpretation, and word problems.",
    },
    {
      url: "/clerical-operations",
      image: null,
      title: "Clerical Operations",
      description:
        "Sub‑Professional level: filing, sorting, clerical accuracy and attention to detail.",
    },
  ];
  return (
    <div className="container mx-auto text-gray-900 my-12">
      <h1 className="text-center font-semibold text-3xl mb-6">
        Your Gateway to Civil Service Success
      </h1>
      <section className="grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {examCategories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </section>
    </div>
  );
}

export default QuizzesContainer;
