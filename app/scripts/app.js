document.getElementById("randomize").addEventListener("click", randomize);
    var changeResult = document.getElementById('result');
    var headcount = 0;
    var tailcount = 0;
function randomize(){
    var result = Math.floor(Math.random() * 2);
    if(result === 0){
        headcount += 1;
        changeResult.innerHTML = "Heads!";
        document.getElementById('headcount').innerHTML = headcount;
    } else {
        tailcount += 1;
        changeResult.innerHTML = "Tails!";
        document.getElementById('tailcount').innerHTML = tailcount;
    }
}