const mainContainer = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google.com'
}

function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domElement);


}

customRender(reactElement, mainContainer);