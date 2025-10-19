const nodeList = document.querySelectorAll("img.clickable");
console.log(nodeList.length + " clickable images found.");
for (let i = 0; i < nodeList.length; i++) {
    var element = nodeList[i];
    var wrapper = document.createElement('a');
    wrapper.href = element.src;
    wrapper.target = "_blank";
    wrapper.rel = "noopener noreferrer";
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}
