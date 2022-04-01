import React, { useMemo, useState } from "react";
import "./Operation.css";
import { FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import { operationTypes } from "../../constants/constants";

const Operation = ({ operation, deleteOperation }) => {
  const [isHidden, setIsHidden] = useState(false);

  const answer = useMemo(() => {
    const digits = operation.number.toString().split("").map(Number);
    let result = digits[0];
    digits.forEach((num, index) => {
      if (index === 0) return;
      switch (operation.type) {
        case operationTypes.PLUS.type:
          result += num;
          break;
        case operationTypes.MINUS.type:
          result -= num;
          break;
        case operationTypes.TIMES.type:
          result *= num;
          break;
        case operationTypes.DIVIDE.type:
          result /= num;
          break;

        default:
          break;
      }
    });
    return result.toFixed(2);
  }, [operation]);

  return (
    <div className='op-wrapper'>
      <div
        className={"operation" + (isHidden ? " hidden" : "")}
        style={{
          backgroundColor: "grey",
          backgroundImage: isHidden
            ? "linear-gradient(to right, #79adad, #79adad)"
            : "linear-gradient(to right, " +
              operationTypes[operation.type].color +
              ", 0.8)" +
              " 100%, red",
        }}
      >
        <span className='left-operations'>
          <span
            className='clickable'
            style={{
              backgroundColor: isHidden
                ? "#79adad"
                : operationTypes[operation.type].color + ")",
            }}
          >
            {operationTypes[operation.type].icon}
          </span>
          <span className='number'>{operation.number}</span>
          <span className='number'>{answer}</span>
        </span>
        <span
          className='clickable btn'
          onClick={() => {
            deleteOperation(operation.id);
          }}
        >
          <FaTrash />
        </span>
        <span
          className='clickable btn'
          onClick={() => {
            setIsHidden((h) => !h);
          }}
        >
          {isHidden ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
    </div>
  );
};

export default Operation;
