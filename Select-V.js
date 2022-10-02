const players = document.querySelectorAll('.select-player');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const selectedArea = document.getElementById('selected-area');
        const child = selectedArea.childNodes.length;
        if (child > 4) {
            alert('not more than 5 players')
            return;
        }
        const li = document.createElement('li')
        li.innerText = playerName;
        selectedArea.appendChild(li);
        event.target.setAttribute('disabled', true);
        event.target.style.backgroundColor = 'gray';

    })
}



document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = getElementByIds('per-player')
    const selectedArea = document.getElementById('selected-area');
    const child = selectedArea.childNodes.length;
    const multiply = perPlayer * child;

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = multiply;

})

function getElementByIds(element) {
    const inputField = document.getElementById(element);
    const feeField = inputField.value;
    const Amount = parseFloat(feeField);
    return Amount;
}

document.getElementById('calculate-total').addEventListener('click', function () {

    const amountValue = getElementByIds('manager')
    const value = getElementByIds('coach')

    const perPlayer = getElementByIds('per-player')
    const selectedArea = document.getElementById('selected-area');
    const child = selectedArea.childNodes.length;
    const multiply = parseInt(perPlayer * child);

    const total = multiply + amountValue + value;
    const totalValue = document.getElementById('total');
    totalValue.innerText = total;
})




