import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TertiaryButton = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className="tertiary-button"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="CTA">
        <div className={`explore ${state.property1}`}>
          {state.property1 === "hover" && <>EXPLORE</>}

          {state.property1 === "default" && <>+</>}
        </div>

        {state.property1 === "hover" && <div className="text-wrapper">+</div>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

TertiaryButton.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};