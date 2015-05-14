/* jslint asi:true, browser:true */

var Annotation = {
    handleEvent: undefined,
    parse: undefined
};

Annotation.handleEvent = function(e) {
    if (e.type !== "click") return;
    if (!e.currentTarget.nextElementSibling.hasAttribute("hidden")) e.currentTarget.nextElementSibling.setAttribute("hidden", "");
    else e.currentTarget.nextElementSibling.removeAttribute("hidden");
}

Annotation.parse = function (element) {
    if (!(element instanceof Element)) element = document.body;
    var i;
    var a;
    var annotation;
    for (i = 0; i < element.getElementsByClassName("annotation").length; i++) {
        annotation = element.getElementsByClassName("annotation").item(i);
        if (annotation.previousElementSibling && annotation.previousElementSibling.tagName.toUpperCase() === "A" && annotation.previousElementSibling.classList.contains("annotation-link")) continue;
        a = document.createElement("A");
        a.appendChild(document.createElement("SUP")).textContent = (i + 1);
        a.href = "#annotation-link-" + (i + 1);
        a.className = "annotation-link";
        a.addEventListener("click", Annotation, true);
        element.getElementsByClassName("annotation").item(i).parentNode.insertBefore(a, element.getElementsByClassName("annotation").item(i));
        element.getElementsByClassName("annotation").item(i).parentNode.insertBefore(document.createTextNode(" "), element.getElementsByClassName("annotation").item(i));
        element.getElementsByClassName("annotation").item(i).setAttribute("hidden", "");
    }
    return element;
}
