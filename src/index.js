function $(id) {
    return document.getElementById (id);
}
function hide(id) {
   $(id).style.display = 'none';
}
function show (id) {
    $(id).style.display = 'block';
}

function showHomePage () {
    hide('skills-page');
    hide('languages-page');
    hide('education-page');
    show('home-page');
}
function showSkillsPage () {
    hide('home-page');
    hide('languages-page');
    hide('education-page');
    show('skills-page');
}
function showEducationpage () {
    hide('home-page');
    hide('skills-page');
    hide('languages-page');
    show('education-page');
}
function showLanguagesPage () {
    hide('home-page');
    hide('skills-page');
    hide('education-page');
    show('languages-page');
}

$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("education-menu").onclick = showEducationpage;
$("languages-menu").onclick = showLanguagesPage;

