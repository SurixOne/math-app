import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { operationsActions, operationsSelector } from "../../store/operations";
import Operation from "../operation/Operation";
import "./OperationsList.css";

const OperationsList = () => {
  const dispatch = useDispatch();
  const operations = useSelector(operationsSelector);

  const deleteOperation = (id) => {
    dispatch(operationsActions.removeOperation(id));
  };

  return (
    <>
      {operations.length > 0 && (
        <div
          className='operations'
          style={{ marginTop: operations.length ? 16 : 0 }}
        >
          <div className='operations-wrapper'>
            {operations.map((op, index) => (
              <Operation
                key={op.key}
                operation={{ ...op, id: index }}
                deleteOperation={deleteOperation}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OperationsList;
