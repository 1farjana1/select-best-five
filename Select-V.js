

// // function addlistItem(element) {
// //     const addlistArray = [];
// //     const playerName = element.parentNode.children[0].innerText;
// //     addlistArray.push(playerName);
// //     // if (addlistArray.length > 5) {
// //     //     alert(risk);
// //     //     return false;
// //     // }
// //     // else
// // }

// // let array = [];
// // // console.log(array);



// function addPlayers(element) {
//     let array = [];
//     const players = document.querySelectorAll('.players');
//     for (const player of players) {
//         const play = element.parentNode.children[0].innerText;
//         // if (array.length < 5) {
//         array.push(play);
//         // }
//         // else {
//         //     alert('risk')
//         // }
//     }
//     return array;
// }
// const arrayList = addPlayers();



// function selectPlayerById(playerId) {
//     const playerIds = document.getElementById(playerId);
//     const player = playerIds.innerText;
//     const selectedArea = document.getElementById('selected-area');
//     const li = document.createElement('li');
//     li.innerText = player;
//     selectedArea.appendChild(li);
// }

// document.getElementById('messi-select').addEventListener('click', function () {
//     selectPlayerById('lionel-messi');
//     const arrayList = addPlayers();
//     console.log(arrayList);

// })
// document.getElementById('neymar-select').addEventListener('click', function () {
//     selectPlayerById('neymar-jr');
//     const arrayList = addPlayers();
// })
// document.getElementById('kylian-select').addEventListener('click', function () {
//     selectPlayerById('kylian-mbappé');
//     const arrayList = addPlayers();

// })
// document.getElementById('vítor-select').addEventListener('click', function () {
//     selectPlayerById('vítor-machado');
//     const arrayList = addPlayers();

// })
// document.getElementById('sergio-select').addEventListener('click', function () {
//     selectPlayerById('sergio-ramos');
//     const arrayList = addPlayers();

// })
// document.getElementById('renato-select').addEventListener('click', function () {
//     selectPlayerById('renato-sanches');
//     const arrayList = addPlayers();

// })





const players = document.querySelectorAll('.select-player');
for (const player of players) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const selectedArea = document.getElementById('selected-area');
        const child = selectedArea.childNodes.length;
        if (child > 4) {
            alert('not more than 5 elements')
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
    const final = totalValue.innerText;
    console.log(final)
    totalValue.innerText = total;
})




