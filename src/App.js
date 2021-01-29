/** @format */
import React, { Component } from "react";
import { Header } from "./components/navbar/header.component";
import { FormGroup } from "./components/form/form.component";
import { Result } from "./components/result/result.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      kinds: [],
      index: 0,
      input: "",
      progress: 0,
      answers: [],
      sentences: [],
      isLast: false,
      isFinished: false,
      result: "",
    };
  }

  componentDidMount() {
    fetch("http://madlibz.herokuapp.com/api/random")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data["title"],
          kinds: data["blanks"],
          sentences: data["value"],
        })
      );
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let index = this.state.index + 1;
    let current = this.state.input;
    this.setState({
      index: this.state.index + 1,
      answers: [...this.state.answers, current],
      progress: ((index + 1) / this.state.kinds.length) * 100,
    });

    document.querySelector("input").value = "";

    if (this.state.index === this.state.kinds.length - 2) {
      this.setState({ isLast: true });
    }

    if (this.state.index === this.state.kinds.length - 1) {
      this.createResult(current);
    }
    event.preventDefault();
  };

  createResult = (current) => {
    let madlib = "";
    for (let i = 0; i < this.state.sentences.length - 1; i++) {
      if (this.state.answers[i]) {
        madlib += this.state.sentences[i] + this.state.answers[i];
      } else if (i === this.state.sentences.length - 3) {
        madlib += this.state.sentences[i] + current;
      } else if (this.state.sentences[i]) {
        madlib += this.state.sentences[i];
      }
    }
    this.setState({
      result: madlib,
      isFinished: true,
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.isFinished ? (
          <Result title={this.state.title} result={this.state.result} />
        ) : (
          <FormGroup
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            kind={this.state.kinds[this.state.index]}
            progress={this.state.progress}
            isLast={this.state.isLast}
          />
        )}
      </div>
    );
  }
}

export default App;
