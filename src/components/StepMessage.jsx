const StepMessage = ({ step, children }) => {
  return (
    <div className="my-4 font-bold">
      <h3> step {step} </h3> {children}
    </div>
  );
};

export default StepMessage;
