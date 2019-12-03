import React from "react";
import Item from "./Item";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: ["apples", "bread", "milk", "cheese"]
    };
  }

  renber() {
    const items = this.state.groceryList.map((item, index) => {
      return <Item key={index} item={item} />;
    });

    return (
      <div className="">
        <h1>Grocery List</h1>
        {items}
      </div>
    );

  }
}


