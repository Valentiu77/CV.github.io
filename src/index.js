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
        {name: 'js', endorsments: 7, endorsedBy: 'Andrei'},
        {name: 'HTML', endorsments: 6, endorsedBy: ''},
        {name: 'css', endorsments: 2, endorsedBy: ''}
    ];
    var resultlist = document.querySelector('#skills-page ul');

var listItems = skills.map(function(skill) {
    var endorsedBy = '-Endorse by';
    if (skill.endorsedBy == "") {
        endorsedBy = "";
    }
    var name =skill.name.toUpperCase();
    return `<li> ${name}
        <span style="color: gray">- ${skill.endorsments}
        ${endorsedBy} </span> ${skill.endorsedBy}
        </li>`;
})
    resultlist.innerHTML = listItems.join('');
}
initMenu();
show('skills-page');
initSkillsPage();
