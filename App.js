const parent = React.createElement(
    "div",
    { id: "parent" }, [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hi from 1"), React.createElement("h1", {}, "Hi from 2")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "Hi from 1"), React.createElement("h1", {}, "Hi from 2")]
    )
]
    // React.createElement(
    //     "div", 
    //     {id:"child"},
    //    [React.createElement("h1", {}, "Hi from 1"), React.createElement("h1", {}, "Hi from 2")]
    // )

);

// const heading = React.createElement("h1", {id:"heading"}, "Hello world from appp.js");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// const heading1 = React.createElement("h1", {}, "Hello world From React !!! :)");
console.log(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent);

