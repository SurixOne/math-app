import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";

export const operationTypes = {
  PLUS: { icon: <FaPlus />, color: "rgb(0, 255, 179", type: "PLUS" },
  MINUS: { icon: <FaMinus />, color: "rgb(255, 0, 85", type: "MINUS" },
  TIMES: { icon: <FaTimes />, color: "rgb(255, 217, 0", type: "TIMES" },
  DIVIDE: {
    icon: <FaDivide />,
    color: "rgb(0, 255, 255",
    type: "DIVIDE",
  },
};
