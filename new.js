var currentDolCurse = prompt('Введите курс доллара');
while (!currentDolCurse){
    currentDolCurse = prompt('Введите курс доллара');
}
function moneyChange(valNum) {
document.getElementById('outputgrn').innerHTML = valNum * currentDolCurse;

}