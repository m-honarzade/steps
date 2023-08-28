import { useState } from "react";

const stepMessage = [
  "Learn React🌟",
  "Apply for a new job 💪",
  "Invest the income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="mx-auto  max-w-md text-2xl mt-20 text-right font-bold">
        <button type="button" onClick={() => setIsOpen((curr) => !curr)}>
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="container mx-auto bg-slate-50 max-w-sm mt-20 text-center p-8 rounded-md">
          <div className="flex flex-row space-x-4 justify-between px-12 py-2">
            <div
              className={`"bg-gray-300 rounded-[50%] px-3 py-1 text-white text-sm" ${
                step >= 1 ? "bg-blue-700" : "bg-gray-400"
              }`}
            >
              <span className=" ">1</span>
            </div>
            <div
              className={`"bg-gray-300 rounded-[50%] px-3 py-1 text-white text-sm" ${
                step >= 2 ? "bg-blue-700" : "bg-gray-400"
              }`}
            >
              <span className=" ">2</span>
            </div>
            <div
              className={`"bg-gray-300 rounded-[50%] px-3 py-1 text-white text-sm" ${
                step >= 3 ? "bg-blue-700" : "bg-gray-400"
              }`}
            >
              <span className=" ">3</span>
            </div>
          </div>
          <p className="my-4">
            step{step}: {stepMessage[step - 1]}
          </p>
          <div className="flex flex-row space-x-4 justify-between px-12 py-2">
            <button
              onClick={() => (step > 1 ? setStep((curr) => curr - 1) : null)}
              type="button"
              className="bg-blue-700 text-white text-sm px-4 py-1 rounded-full"
            >
              previous
            </button>
            <button
              onClick={() => (step < 3 ? setStep((curr) => curr + 1) : null)}
              type="button"
              className="bg-blue-700 text-white text-sm px-4 py-1 rounded-full"
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
