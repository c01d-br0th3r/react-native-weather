const increase = () => {
  return {
    type: "INCREASE",
  };
};

const decrease = () => {
  return {
    type: "DECREASE",
  };
};

export default { increase, decrease };
