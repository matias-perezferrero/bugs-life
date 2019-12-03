import React from "react";

export default function Item() {
  return (
    <div className="">
      <input type="checkbox" />
      {this.props.item}
    </div>
  );
}


