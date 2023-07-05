"use client";
import SingleQuestion from "./question";
import { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [questions] = useState(data);

  return (
    <section className="flex flex-col gap-[32px]">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Accordion;
