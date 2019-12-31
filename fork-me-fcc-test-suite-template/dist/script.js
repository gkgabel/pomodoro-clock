function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Clock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "bi",








    () => {
      if (this.state.breaklength < 60) {
        this.g = this.state.breaklength + 1;
        if (this.state.current == "break") this.setState({ start: this.g * 60 });
        this.setState({ breaklength: this.g });
      }
    });_defineProperty(this, "bd",
    () => {
      if (this.state.breaklength > 1) {
        this.g = this.state.breaklength - 1;
        if (this.state.current == "break") this.setState({ start: this.g * 60 });
        this.setState({ breaklength: this.g });
      }
    });_defineProperty(this, "si",
    () => {
      if (this.state.sessionlength < 60) {
        this.g = this.state.sessionlength + 1;
        if (this.state.current == "session")
        this.setState({ start: this.g * 60 });
        this.setState({ sessionlength: this.state.sessionlength + 1 });
      }
    });_defineProperty(this, "sd",
    () => {
      if (this.state.sessionlength > 1) {
        this.g = this.state.sessionlength - 1;
        if (this.state.current == "session")
        this.setState({ start: this.g * 60 });
        this.setState({ sessionlength: this.g });
      }
    });_defineProperty(this, "timer",
    () => {
      if (this.state.on == false) {
        this.t = setInterval(() => {
          if (this.state.start > 0) {
            this.setState({ start: this.state.start - 1 });
          } else
          {
            if (this.state.current == "session") {
              this.s = this.state.breaklength * 60;
              this.c = "break";
            } else {
              this.s = this.state.sessionlength * 60;
              this.c = "session";

            }
            this.setState({ start: this.s, current: this.c });
          }
        }, 10);
        this.setState({ on: true });
      } else {
        clearInterval(this.t);
        this.setState({ on: false });
      }
    });_defineProperty(this, "showtime",
    () => {
      var m = Math.floor(this.state.start / 60),
      s = this.state.start % 60;
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;
      return m + ":" + s;
    });_defineProperty(this, "reset",
    () => {
      this.setState({
        start: 1500,
        breaklength: 5,
        sessionlength: 25,
        current: "session",
        on: false });

      clearInterval(this.t);
    });this.state = { breaklength: 5, sessionlength: 25, start: 1500, current: "session", on: false };}
  render() {
    return (
      React.createElement("div", { id: "timer" }, React.createElement("div", { id: "controls" }, React.createElement("div", { id: "break" },
      React.createElement("label", { id: "break-label" }, "Break Length"), React.createElement("br", null),
      React.createElement("button", { id: "break-increment", class: "btn .btn-primary", onClick: () => this.bi() }, "+"),




      React.createElement("label", { id: "break-length" }, this.state.breaklength),
      React.createElement("button", { id: "break-decrement", class: "btn .btn-primary", onClick: () => this.bd() }, "-")),


      React.createElement("div", { id: "session" },
      React.createElement("label", { id: "session-label" }, "Session Length"), React.createElement("br", null),
      React.createElement("button", { id: "session-increment", class: "btn .btn-primary", class: "btn .btn-primary", onClick: () => this.si() }, "+"),


      React.createElement("label", { id: "session-length" }, this.state.sessionlength),
      React.createElement("button", { id: "session-decrement", class: "btn .btn-primary", onClick: () => this.sd() }, "-"))),



      React.createElement("label", { id: "timer-label" }, this.state.current),
      React.createElement("label", { id: "time-left" }, this.showtime()),
      React.createElement("button", { class: "btn .btn-info", id: "start_stop", onClick: () => this.timer() }, "Play/Pause"),


      React.createElement("button", { class: "btn .btn-info", id: "reset", onClick: () => this.reset() }, "Reset")));




  }}


ReactDOM.render(React.createElement(Clock, null), document.getElementById("main"));