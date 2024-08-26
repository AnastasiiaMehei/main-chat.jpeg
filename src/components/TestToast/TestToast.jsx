import React from "react";
import { Toaster, toast } from "react-hot-toast";

const TestToast = () => {
  const showToast = () => {
    toast.success("This is a test toast!");
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <Toaster />
    </div>
  );
};

export default TestToast;
