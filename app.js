import React from "react";
import ReactDOM from "react-dom/client"; // createRoot might not be on the default export

// React Object
const headers = React.createElement("h1", { id: "header" }, "Devendra holikar")

// React Element
const header = (<h1 className="name">Devendra Holikar</h1>);

// React function component

const HeadingComponent = () => {
    return <div className="parent">
        <h1 className="name">Namaskar Devendra Holikar</h1>
    </div>
}

// Component composition 

const Title = () =>
(
    <div className="newset">
        <HeadingComponent />
        <h2 className="name">Dev</h2>
    </div>
)

// React function pass variable

const setValue = 222
const Title2 = () =>
(
    <div className="newset">
        <HeadingComponent />
        {header}
        <h2 className="name">Dev {setValue}</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Title2 />)