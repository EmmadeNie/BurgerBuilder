import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    console.log("lala", this.props.ingredients);
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schawrxz",
        address: {
          street: "teststreet",
          zipCode: "32432",
          COUNTREY: "Germany",
        },
        email: "terst@test.com",
        deliveryMethod: "fasttest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        ({ loading: false, purchasing: false });
      });
  };

  render() {
    console.log(this.props.price);
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            type="text"
            className={classes.Input}
            name="name"
            placeholder="Your name"
          />
          <input
            type="text"
            className={classes.Input}
            name="email"
            placeholder="Your Mail"
          />
          <input
            type="text"
            className={classes.Input}
            name="street"
            placeholder="Your Street"
          />
          <input
            type="text"
            className={classes.Input}
            name="postal"
            placeholder="Your Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
