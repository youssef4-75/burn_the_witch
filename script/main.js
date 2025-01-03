const container = document.getElementById('container');


function board(a, b, x) {
    if (x < a) return a;
    if (x > b) return b;
    return x;
}

function randomPosition(size) {
    const x = board(0, container.offsetWidth - size,
        Math.random() * (container.offsetWidth));
    const y = board(0, container.offsetHeight - size,
        Math.random() * (container.offsetHeight)
    );

    return { x, y };
}

function createBlock() {
    let L = []

    const block = document.createElement('div');
    block.classList.add('block');

    [
        ["--vy", 20 + Math.random() * 10],
        ["--vx", Math.random() * 4 - 2],
    ].forEach(val => {
        block.style.setProperty(val[0], val[1]);
    })


    const R = (Math.random() * 40) + 70;
    block.style.width = `${R}px`;
    block.style.height = `${R}px`;



    const breadTop = document.createElement('div');
    breadTop.classList.add('layer', 'bread-top');

    const lettuce = document.createElement('div');
    lettuce.classList.add('layer', 'lettuce');

    L.push(lettuce);

    const tomato = document.createElement('div');
    tomato.classList.add('layer', 'tomato');
    L.push(tomato);

    const cheese = document.createElement('div');
    cheese.classList.add('layer', 'cheese');
    L.push(cheese);

    const meat = document.createElement('div');
    meat.classList.add('layer', 'patty');
    L.push(meat);

    const breadBottom = document.createElement('div');
    breadBottom.classList.add('layer', 'bread-bottom');

    block.append(breadTop, lettuce, tomato, cheese, meat, breadBottom);

    const { x, y } = randomPosition(R);

    block.style.left = `${x}px`;
    block.style.top = `${y}px`;

    let rest = 4;
    L = shuffleArray(L);



    block.addEventListener('click', () => {
        const block_ = L.pop();
        increasePoints();
        block.removeChild(block_);
        rest--;
        if (rest == 0) {
            for(let i=0; i<10; i++){increasePoints();}
            endSandwitch(container, block);
        }

        update();
    });

    container.appendChild(block);
    
    upPosition(block, container)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateBlocks() {
    createBlock();

    // Repeat block creation every second
    setTimeout(() => {
        generateBlocks();
    }, 3000);
}

// Start generating blocks on click
container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('block')) {

    }
});

// Initial blocks
update();

generateBlocks();