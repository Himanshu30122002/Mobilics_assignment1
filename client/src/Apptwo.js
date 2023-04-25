import React from "react";
import "./App.css";
//import { useEffect, useState } from "react";
import axios from 'axios';


class Apptwo extends React.Component {

  state = {
    posts: []
  };

  componentDidMount = () => {
    this.getuserpost();
  };

  getuserpost = () => {
    axios.get("/api/products/testing")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log(data)
        console.log("data has been re");
      }).catch(() => {
        alert("error");
      });
  }
displayuserpost = (posts) => {

    if (!posts || posts.length === 0) {
      return <div>No posts found.</div>;
    }
    return posts.myData.map((post, index) => {
      return (
        <tr key={index}>
          <td>{post.car}</td>
          <td>{post.city}</td>
          <td>{post.email}</td>
          <td>{post.first_name}</td>
          <td>{post.gender}</td>
          <td>{post.id}</td>
          <td>{post.income}</td>
          <td>{post.last_name}</td>
          <td>{post.phone_price}</td>
          <td>{post.quote}</td>
        </tr>
      );
    });
  };
render() {
   return (
      <div>
        <h1>Male Users which have phone price greater than 10,000.</h1>
        <table id="customers">
          <tbody>
            <tr>
              <th>car</th>
              <th>city</th>
              <th>email</th>
              <th>first_name</th>
              <th>gender</th>
              <th>id</th>
              <th>income</th>
              <th>last_name</th>
              <th>phone_price</th>
              <th>quote</th>
            </tr>
            {this.displayuserpost(this.state.posts)};
          </tbody>
        </table>
      </div>
    );
  }
}
export default Apptwo