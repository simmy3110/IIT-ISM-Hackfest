var i = parseInt(document.getElementById('inc').value);
var j=0;
    function buttonClick() {
        i++;
        j++;
        if(j==1)
        document.getElementById('inc').value = i;
    }