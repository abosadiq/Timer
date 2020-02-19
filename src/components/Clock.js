import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minutes: 0,
      seconds: 0,
      stop: null,
      isInput: false,
      isInput2: false,
      isInput3: false
    };
  }
  clockTime = () => {
    this.timer = setInterval(() => {
      if (this.state.seconds >= 59) {
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          seconds: 0
        }));
      }
      if (this.state.minutes >= 59) {
        this.setState(prevState => ({
          hour: prevState.hour + 1,
          seconds: 0,
          minutes: 0
        }));
      }
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  };

  componentDidMount = () => {
    this.clockTime();
  };

  componentWillUnmount() {
    clearInterval(this.timer);

    this.keyPressed();
  }
  pauseTime = () => {
    this.setState({
      stop: clearInterval(this.timer),
      isInput: true
    });
  };
  pauseTime2 = () => {
    this.setState({
      stop: clearInterval(this.timer),
      isInput2: true
    });
  };
  pauseTime3 = () => {
    this.setState({
      stop: clearInterval(this.timer),
      isInput3: true
    });
  };

  handleChange = e => {
    this.setState({
      hour: parseInt(e) || 0
    });
  };
  handleChange2 = e => {
    this.setState({
      minutes: parseInt(e) || 0
    });
  };
  handleChange3 = e => {
    this.setState({
      seconds: parseInt(e) || 0
    });
  };
  keyPressed = e => {
    if (e.key === "Enter") {
      this.clockTime();
      console.log("Enter key pressed");
      this.setState({
        isInput: false,
        isInput2: false,
        isInput3: false
      });
    }
  };

  render() {
    let hour = this.state.hour;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    let am_pm = "AM";
    if (hour === 12) {
      am_pm = "PM";
    }
    if (hour > 12) {
      am_pm = "PM";
    }
    if (hour >= 24) {
      hour = 0;

      am_pm = "AM";
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      <div>
        {!this.state.isInput ? (
          <button onClick={this.pauseTime}>{hour}</button>
        ) : (
          <input
            type="number"
            max={24}
            value={hour}
            onChange={e => this.handleChange(e.target.value)}
            onKeyPress={this.keyPressed}
          />
        )}
        :
        {!this.state.isInput2 ? (
          <button onClick={this.pauseTime2}>{minutes}</button>
        ) : (
          <input
            type="number"
            max={59}
            value={minutes}
            onChange={e => this.handleChange2(e.target.value)}
            onKeyPress={this.keyPressed}
          />
        )}
        :
        {!this.state.isInput3 ? (
          <>
            <button onClick={this.pauseTime3}>{seconds}</button>{" "}
            <span>{am_pm}</span>
          </>
        ) : (
          <input
            type="number"
            max={59}
            value={`${seconds}`}
            onChange={e => this.handleChange3(e.target.value)}
            onKeyPress={this.keyPressed}
          />
        )}
      </div>
    );
  }
}
