
window.onload = function(){
    setInterval(switchNames, 2000)
};

function switchNames() {
    const name1elem = document.getElementById("namechange1")
    
    const name2elem = document.getElementById("namechange2")
    const name1 = name1elem.textContent;
    const name2 = name2elem.textContent;
    name1elem.textContent = name2;
    name2elem.textContent = name1;
    console.log('called')

}