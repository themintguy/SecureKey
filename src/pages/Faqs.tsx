import  { useState } from "react";

function Faqs() {
  // Question 1
  const [answer1, setAnswer1] = useState("");
  const [visible1, setVisible1] = useState(true);
  const [question1] = useState("What is SecureKey?");

  // Question 2
  const [answer2, setAnswer2] = useState("");
  const [visible2, setVisible2] = useState(true);
  const [question2] = useState("Why do I need strong passwords?");

  // Question 3
  const [answer3, setAnswer3] = useState("");
  const [visible3, setVisible3] = useState(true);
  const [question3] = useState("What makes a password strong?");

  const toggleAnswer1 = () => {
    if (visible1) {
      setAnswer1("SecureKey is a platform that helps you generate and manage highly secure passwords, encryption keys, and access tokens efficiently.");
      setVisible1(false);
    } else {
      setAnswer1("");
      setVisible1(true);
    }
  };

  const toggleAnswer2 = () => {
    if (visible2) {
      setAnswer2("Strong passwords protect your accounts from unauthorized access, hacking attempts, and data breaches.");
      setVisible2(false);
    } else {
      setAnswer2("");
      setVisible2(true);
    }
  };

  const toggleAnswer3 = () => {
    if (visible3) {
      setAnswer3("A strong password contains a mix of uppercase and lowercase letters, numbers, special characters, and is at least 12 characters long.");
      setVisible3(false);
    } else {
      setAnswer3("");
      setVisible3(true);
    }
  };

  return (
    <div className="bg-[var(--color-room)] text-[var(--color-leaf)]  px-6 py-12 ml-12 mr-12 ">
      <h2 className="text-3xl font-semibold text-[var(--color-ocean)] text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* Q1 */}
      <div className="border-b border-[var(--color-cream)] py-4 ">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer1}>
          <p className="text-lg">{question1}</p>
          <button className="text-[var(--color-ocean)] text-3xl">{visible1 ? "+" : "-"}</button>
        </div>
        {answer1 && <p className="mt-2 opacity-90">{answer1}</p>}
      </div>

      {/* Q2 */}
      <div className="border-b border-[var(--color-cream)] py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer2}>
          <p className="text-lg">{question2}</p>
          <button className="text-[var(--color-ocean)] text-3xl">{visible2 ? "+" : "-"}</button>
        </div>
        {answer2 && <p className="mt-2 opacity-90">{answer2}</p>}
      </div>

      {/* Q3 */}
      <div className="border-b border-[var(--color-cream)] py-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswer3}>
          <p className="text-lg">{question3}</p>
          <button className="text-[var(--color-ocean)] text-3xl">{visible3 ? "+" : "-"}</button>
        </div>
        {answer3 && <p className="mt-2 opacity-90">{answer3}</p>}
      </div>
    </div>
  );
}

export default Faqs;
