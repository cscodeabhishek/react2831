const container = document.getElementById("root");
function Helloworld(){
    return <h1>Hello world</h1>;
}
ReactDOM.createRoot(container).render(<Helloworld />);
// JSX (babel convert jsx to actual react code)