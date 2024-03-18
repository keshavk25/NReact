import React from "react";

class UserClass extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      //   userInfo:{
      //     name:"Dummy",
      //     location:"Naa"
      //   },
      userInfo: "",
      count: 1,
      // we can make multiple state variable here
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/keshavk25");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.inter = setInterval(() => {
      console.log("ComponentDidMount");
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.inter);
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;

    return (
      <>
        <h1>This is class based component</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <img src={avatar_url} alt="" />
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            //To update State variable
            this.setState({
              count: count + 1,
              //we can update multiple state variable here
            });
          }}
        >
          Inc. Count
        </button>
        <h2>{count2}</h2>
      </>
    );
  }
}

export default UserClass;
