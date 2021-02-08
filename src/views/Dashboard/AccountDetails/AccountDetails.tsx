import React from "react";

interface IProps {
  resetSession: () => void;
}

export const AccountDetails = (props: IProps) => {
  return (
    <span>
      <button
        onClick={() => {
          props.resetSession();
        }}
      >
        Reset Session
      </button>
    </span>
  );
};
