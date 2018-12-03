function $(id) {
    return document.getElementById(id);
}
function hide(id) {
    $(id).style.display = 'none';
}
function show(id) {
    $(id).style.display = 'block';
}

function hideElement(el) {
    el.style.display = 'none';
}

function hideallPages() {
    var pages = document.querySelectorAll(".page-block");
    pages.forEach(hideElement);
}

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            hideallPages();
            var page = this.getAttribute('data-page')
            show(page + "-page");
        }
    }
}

function initSkillsPage() {
    var skills = [
        ['js', 7, "Andrei"], 
        ['HTML', 6, "Andreea"], 
        ['css', 2, ""]
    ];
    var resultlist = document.querySelector('#skills-page ul');

var listItems = skills.map(function(skill) {
    var endorseBy = '-Endorse by';
    if (skill[2] == "") {
        endorseBy = "";
    }
    var name =skill[0].toUpperCase();
    return `<li> ${name}
        <span style="color: gray">- ${skill[1]}
        ${endorseBy} </span> ${skill[2]}
        </li>`;
})
    resultlist.innerHTML = listItems.join('');
}
initMenu();
show('skills-page');
initSkillsPage();
