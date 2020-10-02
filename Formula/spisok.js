var select = document.querySelector('#customID'),
all_blocs = document.querySelector('.all_blocs'),
blocs = all_blocs.getElementsByTagName('div');
 
function init() {
    select.options[1].selected=true;
    blocs[0].style.display = 'block';
}
init();
 
select.addEventListener('change', function() {
    var ind = select.selectedIndex;
    for (var i=1;i<=blocs.length;i++){
        var ii = i-1;
        if (i == ind) {
            blocs[ii].style.display = 'block';
        } else {
            blocs[ii].style.display = 'none';
        }
    }
})