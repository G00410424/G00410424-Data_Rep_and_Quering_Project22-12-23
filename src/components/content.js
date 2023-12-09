function Content() {
    return (
        <div>
            <h1>Hello World, these are my trips!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <img
                src="/Prague.png"
                alt="Prague"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
        </div>
    );
}
export default Content;