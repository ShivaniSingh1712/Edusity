import "./style.css";

function Title({ subtitle, title }) {
    return (
        <>
            <div className="container title">
                <p>{subtitle}</p>
                <h2>{title}</h2>
            </div>
        </>
    )
}
export default Title;