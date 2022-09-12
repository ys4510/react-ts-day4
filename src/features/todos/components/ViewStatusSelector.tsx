import React from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { VIEW_STATUSES, ViewStatus } from "../types";
import {changeViewStatus} from '../todoSlice'

const ViewStatusSelector = () => {
  const dispatch = useAppDispatch();
  const viewStatus = useAppSelector(state=> state.todos.viewStatus);

  const onChangeViewStatus : React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newStatus = e.target.value as ViewStatus;
    dispatch(changeViewStatus(newStatus));
  };

  return (
    <>
      <hr />
      <label>
        <span>View Options : </span>
        <select value={viewStatus} onChange={onChangeViewStatus}>
          {Object.entries(VIEW_STATUSES).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default ViewStatusSelector;
