/* jslint asi:true, browser:true */

var Annotation = {
    handleEvent: undefined,
    parse: undefined
};

Annotation.handleEvent = function(e) {
    if (e.type !== "click") return;
    if (!this.nextElementSibling.hasAttribute("hidden")) this.nextElementSibling.setAttribute("hidden", "");
    else this.nextElementSibling.removeAttribute("hidden");
}

Annotation.parse = function (element) {
    if (!(element instanceof Element)) element = document.body;
    var i;
    var a;
    var annotation;
    for (i = 1; i <= element.getElementsByClassName("annotation").length; i++) {
        annotation = element.getElementsByClassName("annotation").item(i);
        if (annotation.previousElementSibling && annotation.previousElementSibling.tagName.toUpperCase() === "A" && annotation.previousElementSibling.classList.contains("annotation-link")) continue;
        a = document.createElement("A");
        a.appendChild(document.createElement("SUP")).textContent = i;
        a.href = "#annotation-link-" + i;
        a.className = "annotation-link";
        a.addEventListener("click", Annotation, true);
        element.getElementsByClassName("annotation").item(i - 1).parentNode.insertBefore(a, element.getElementsByClassName("annotation").item(i - 1));
        element.getElementsByClassName("annotation").item(i - 1).parentNode.insertBefore(document.createTextNode(" "), element.getElementsByClassName("annotation").item(i - 1));
        element.getElementsByClassName("annotation").item(i - 1).setAttribute("hidden", "");
    }
    return element;
}
