const styled = (aElement) => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled("h1") `
    background-color: black;
    color: blue
`;

const subtitle = styled("span")`
    color: green;
`;

title.innerText = "We just cloned";
subtitle.innerText = "Sytled Components";

document.body.append(title, subtitle);
console.log(title);