/* jslint asi:true, browser:true */

var Annotation = {
    handleEvent: undefined,
    init: undefined
};

Annotation.handleEvent = function(e) {
    if (e.type !== "click") return;
    var a;
    var n = e.target;
    do if (n.nodeName.toUpperCase() === "A") a = n;
    while (!a && (n = n.parentNode));
    if (!a || !a.classList.contains("annotation-link")) return;
    if (!a.nextElementSibling.hasAttribute("hidden")) a.nextElementSibling.setAttribute("hidden", "");
    else a.nextElementSibling.removeAttribute("hidden");
}

Annotation.init = function () {
    for (var i = 1; i <= document.getElementsByClassName("annotation").length; i++) {
        var a = document.createElement("A");
        a.appendChild(document.createElement("SUP")).textContent = i;
        a.href = "#annotation-link-" + i;
        a.className = "annotation-link";
        document.getElementsByClassName("annotation").item(i - 1).parentNode.insertBefore(a, document.getElementsByClassName("annotation").item(i - 1));
        document.getElementsByClassName("annotation").item(i - 1).parentNode.insertBefore(document.createTextNode(" "), document.getElementsByClassName("annotation").item(i - 1));
        document.getElementsByClassName("annotation").item(i - 1).setAttribute("hidden", "");
    }
    document.documentElement.addEventListener("click", Annotation, true);
    var style = document.createElement("STYLE");
    document.body.appendChild(style);
}
