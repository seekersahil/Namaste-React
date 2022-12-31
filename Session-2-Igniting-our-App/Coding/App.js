const root = ReactDOM.createRoot(document.getElementById("root"));
let h1 = React.createElement(
  "h1",
  {
    style: {
      fontSize: "25px",
      color: "blue",
    },
  },
  "Rendered with ReactJS"
);
let h2 = React.createElement(
  "h2",
  {
    style: {
      fontSize: "20px",
      color: "green",
    },
  },
  "Also rendered with ReactJS"
);
let div = React.createElement(
  "div",
  {
    className: "container",
  },
  [h1, h2]
);
root.render(div);
