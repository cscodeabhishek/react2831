// console.log("hello world");
const container = document.getElementById("root");
console.log(container);
// type ,props,children
const el = React.createElement("h1",null,"Hello reactJS")
ReactDOM.createRoot(container).render(el);
