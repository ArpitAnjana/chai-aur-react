function renderElement(reactElement, container){
    {/*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.placeholder;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.append(domElement);
    */}

    //setAttribute(nameOfAttribute, valueofAttribute)
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.placeholder;
    for(const prop in reactElement.props){
        if(prop === 'placeholder') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);//we are accessing the property value by bracket '[]' not with "." bcz  The actual property names are not known in advance; they are determined dynamically during the loop iteration. 
        //so we cant write it like reactElement.props.prop bcz we dont know yet the value of it after each iteration we will know it dynamically
        //we are using for loop that works dynamically  

    }
    container.append(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    placeholder: 'click me to visit google buddy!'
}

const  mainContainer = document.querySelector('#root');

renderElement(reactElement, mainContainer);