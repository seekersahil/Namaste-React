const root = ReactDOM.createRoot(document.getElementById('root'));
let h1 = React.createElement("h1",
    null
,"Rendered via react");
console.log(root)
root.render(h1)