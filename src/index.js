
function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            
            $('.page-block').hide();
            var page = this.getAttribute('data-page')
            $('#' + page + "-page").show();
        }
    }
}

function displaySkills (skills) {
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

function initSkillsPage() {
    $.ajax('data/skills.json').done(function(skills){
        displaySkills(skills);
    })
}
initMenu();
$('#skills-page').show();
$.ajax('data/skills.json');
initSkillsPage();
