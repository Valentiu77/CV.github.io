function $(id) {
    return document.getElementById (id);
}
function hide(id) {
   $(id).style.display = 'none';
}
function show (id) {
    $(id).style.display = 'block';
}


function hideallPages (){
    var pages = document.querySelectorAll (".page-block");
    pages.forEach(function(page){
        console.info('hide: ' + page.id);
        page.style.display = 'none';
    })

    // for(var i =0; i <pages.length; i++){
    //     pages[i].style.display='none';
    // }
}
var links = document.querySelectorAll ("#top-menu-bar a");
for(var i =0; i <links.length; i++){
    links[i].onclick = function() {
        hideallPages();
        var page = this.getAttribute('data-page')
        show(page + "-page");
    };
}

show('home-page');