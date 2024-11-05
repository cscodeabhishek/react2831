// console.log("hello world");
const container = document.getElementById("root");
function Helloworld(){
    return <h1>Hello Wordl</h1>;
}
// console.log(container);
// type ,props,children
// const el = React.createElement("h1",null,"Hello reactJS")

ReactDOM.createRoot(container).render(<Helloworld />);
