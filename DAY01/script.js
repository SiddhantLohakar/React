// Creating my custom react js

const React = {

    createElement : function(tag, styles, children){

        const element = document.createElement(tag);

        for(let keys in styles)
        {
            element.style[keys] = styles[keys];
        }

        element.innerText = children;
        return element
    }
}


const ReactDOM = {
    render : function(element, root){
        root.append(element);
    }
}



const header1 = React.createElement('h1', {backgroundColor:"black", color:"white", "font-size": "32px"}, "Hello Siddhant");
const header2 = React.createElement('h2', {backgroundColor:"blue", color:"white", "font-size": "28px"}, "Welcome Back");
ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(header2, document.getElementById("root"));