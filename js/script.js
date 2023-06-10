function ozgartir() {
    var a = document.getElementById("card");
    var inputbgcolor = document.getElementById("input-bgcolor");
    var inputopacity = document.getElementById("input-opacity");
    var inputwidth = document.getElementById("input-width");
    var inputheight = document.getElementById("input-height");
    var inputborder = document.getElementById("input-border");
    var sitename = document.getElementById("website-name");
    var inputname = document.getElementById("input-name");
    var siteparagraph = document.getElementById("paragraph");
    var inputparagraph = document.getElementById("input-paragraph");
    var siteauthor = document.getElementById("user");
    var inputauthor = document.getElementById("input-author");

    a.style.background = inputbgcolor.value;
    a.style.width = inputwidth.value + "px";
    a.style.height = inputheight.value + "px";
    a.style.opacity = inputopacity.value;
    a.style.border = inputborder.value;
    sitename.innerHTML = `<h3>${inputname.value}</h3>`;
    siteparagraph.innerHTML = `<h3>${inputparagraph.value}</h3>`;
    siteauthor.innerHTML = `<h3>${inputauthor.value}</h3>`;
}