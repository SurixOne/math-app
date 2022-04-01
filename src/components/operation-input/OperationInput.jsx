import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { operationTypes } from "../../constants/constants";
import { operationsActions } from "../../store/operations";
import "./OperationInput.css";
import ReactSelect from "react-select";
import { FaAngleDown } from "react-icons/fa";

const OperationInput = () => {
  const dispatch = useDispatch();

  const [operation, setOperation] = useState({
    type: operationTypes.PLUS.type,
    number: 0,
  });

  const generateKey = () => {
    return `op_${new Date().getTime()}`;
  };

  const addOperation = () => {
    dispatch(
      operationsActions.addOperation({
        ...operation,
        key: generateKey(),
      })
    );
  };

  const handleOperationChange = (e) => {
    setOperation((op) => ({ ...op, type: e.value }));
  };

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "black",
      color: "rgb(0, 255, 179)",
      borderRadius: 0,
      padding: "33.015px 33.015px 27px 33.015px",
      outline: "none",
      border: "none",
      cursor: "pointer",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected, isActive }) => {
      return {
        ...styles,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 16,
        margin: 0,
        padding: "0px !important",
        height: 100,
        color: isSelected ? "black !important" : "rgb(0, 255, 179) !important",
        backgroundColor: isSelected
          ? "rgb(0, 255, 179)"
          : isFocused
          ? "rgb(34, 39, 38)"
          : isActive
          ? "red"
          : styles.backgroundColor,
      };
    },
    menuList: (styles) => ({
      ...styles,
      backgroundColor: "black",
      color: "white",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }),
    menu: (styles) => ({
      ...styles,
    }),
  };

  const handleNumberChange = (e) => {
    setOperation((op) => ({ ...op, number: e.target.value }));
  };

  return (
    <div className='operation-input'>
      <FaAngleDown className='arrow-icon' />
      <ReactSelect
        isSearchable={false}
        className='operation-select'
        styles={selectStyles}
        onChange={handleOperationChange}
        value={{
          value: operationTypes[operation.type].type,
          label: operationTypes[operation.type].icon,
        }}
        options={Object.values(operationTypes).map((op) => ({
          value: op.type,
          label: op.icon,
        }))}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      <input
        className='number-input'
        type='text'
        onChange={handleNumberChange}
      />
      <span className='btn-add' onClick={addOperation}>
        new
      </span>
    </div>
  );
};

export default OperationInput;
