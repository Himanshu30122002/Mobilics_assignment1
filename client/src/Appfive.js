import React from "react";
import "./App.css";
//import { useEffect, useState } from "react";
import axios from 'axios';


class Appfive extends React.Component {

  state = {
    posts: []
  };

  componentDidMount = () => {
    this.getuserpost();
  };

  getuserpost = () => {
    axios.get("/api/products/testingqueryfive")
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
          <td>{post._id}</td>
          <td>{post.count}</td>
          <td>{post.avg_income}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Show the data of top 10 cities which have the highest number of users and their average income.</h1>
        <table id="customers">
          <tbody>
            <tr>
              <th>id</th>
              <th>count</th>
              <th>avg_income</th>


            </tr>
            {this.displayuserpost(this.state.posts)};
          </tbody>
        </table>
      </div>
    );
  }
}
export default Appfive