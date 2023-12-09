function Content() {
    return (
        <div>
            <h1>Hello World, these are my trips!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <img
                src="/images/your-image.jpg"
                alt="Description of the image"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
        </div>
    );
}
export default Content;