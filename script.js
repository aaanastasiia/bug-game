const body = document.body;
const levelName = document.querySelectorAll('.level__checked');
const menu = document.getElementById('content');
const buttonStart = document.getElementById('button__start');
const levelCondition = {
    'simple': 3,
    'middle': 6,
    'hard': 10
}

buttonStart.addEventListener('click', getLevel);

function getLevel () {
    levelName.forEach(function (level, i) {
        if (level.checked) {
            menu.style.display = 'none';
            level = levelName[i].value;
            openGame(level);
            }
        }
    )};

function openGame (level) {
    const cardTable = document.createElement('div');
    cardTable.className = 'cards';
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper'
    cardTable.appendChild(wrapper);
    body.appendChild(cardTable);
        for ( let k = 0; k < levelCondition[level]; k++) {
            const lev = levelCondition[level];
            const cardWrap = document.createElement('div');
            wrapper.appendChild(cardWrap);
            cardWrap.className = 'card__wrap';
            const cardFront = document.createElement('div');
            cardWrap.appendChild(cardFront);
            cardFront.className = 'card__front';
            cardFront.innerHTML = '<img class="img" src="img/card.png" alt="card">';
            const img = document.querySelectorAll('.img-front');
        }
            switch (levelCondition[level]) {
                case 3:
                    wrapper.classList.add('simple');
                    break;
                case 6:
                    wrapper.className = 'wrapper middle';
                    break;
                case 10:
                    wrapper.className = 'wrapper hard';
                    break;
            }
    const wraps = [...document.querySelectorAll('.card__wrap')];
    winCard(wraps);
}

function winCard (wraps) {
    let getRandom = (Math.round(Math.random() * (wraps.length - 1)));
    let clickBag = wraps[getRandom];
    clickBag.id = 'bag';
    let bag = document.getElementById('bag');
    let cardBackWin = document.createElement('div');
    bag.appendChild(cardBackWin);
    cardBackWin.className = 'card__back-win';
    cardBackWin.innerHTML = '<img class="img" src="img/card-back-win.png" alt="card">';
    delete wraps[getRandom];
    let arrayWithOutBag = wraps.filter(wrap => wrap !== 'bag');
    losingCards (arrayWithOutBag);
};

    function losingCards (arrayWithOutBag) {
        arrayWithOutBag.forEach(card => {
            let cardBackLosing = document.createElement('div');         
            cardBackLosing.className = 'card__back-losing';
            cardBackLosing.innerHTML = '<img class ="img" src="img/card-back-losing.png" alt="card">';
            card.appendChild(cardBackLosing);
            clickCard ();
        })
    };

    function clickCard () {
        let flippedCard = false;
        let cardWrap = document.querySelectorAll('.card__wrap');
        let cardTable = document.querySelector('.cards');
            cardWrap.forEach(function (card, i) {
                card.addEventListener('click', function () {
                    if (!flippedCard) {
                        cardWrap[i].style.transform = 'rotateY(180deg)';
                        flippedCard = true;
                    }
                    else {
                        cardTable.remove();
                        menu.style.display = 'block';
                        flippedCard = false;
                    }
                })
            })
    };
    