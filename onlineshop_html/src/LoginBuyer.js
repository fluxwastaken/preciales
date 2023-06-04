import React from "react";
import { Link } from 'react-router-dom';

class LoginBuyer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buyer: {
        buyer_id: "",
        buyer_name: "",
        buyer_email: "",
        buyer_password: ""
      },
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let temp = this.state.buyer;
    temp[name] = value;
    console.log(temp);
    this.setState({ buyer: temp });
  }


  async handleSubmit(e) {
    e.preventDefault();
    let response = await fetch(`http://localhost:8080/searchBuyerEmail?keyword=${this.state.buyer.buyer_email}`);
    let buyer = await response.json();
    console.log(buyer);
  
    if (buyer && this.state.buyer.buyer_password === buyer.buyer_password) {
      this.setState({ buyer: { ...this.state.buyer, buyer_id: buyer.buyer_id }, error: "" }, () => {
        console.log(this.state.buyer);
        this.setState({ error: "Valid" });
        // Proceed to the next step or perform any desired action here
      
      });
    } else {
      this.setState({ error: "Invalid password" });
      console.log("Invalid email/password");
      // Display an error message or take appropriate action
    }
  }

  render() {
    return (
      <div>
        <form>
          <h1>LOGIN Buyer</h1>
          <label htmlFor="bEmail">E-mail:</label><br></br>
          <input type="text" id="bEmail" name="buyer_email" onChange={this.handleChange}></input><br></br>
          <label htmlFor="bPassword">Password:</label><br></br>
          <input type="password" id="bPassword" name="buyer_password" onChange={this.handleChange}></input><br></br>
          {this.state.error && <p>{this.state.error}</p>}
          <button onClick={this.handleSubmit}>Log-in</button>
          <button>Clear</button>
          {this.state.error === "Valid" && <Link to={`/home/loginBuyer=true/${this.state.buyer.buyer_id}`}>Go to New Link</Link>}
        </form>
      </div>
    );
  }
}

export default LoginBuyer;
