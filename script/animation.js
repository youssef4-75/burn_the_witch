let latency = 17;
let notEnded = true


function upPosition(block, container) {
    
    let vx = block.style.getPropertyValue('--vx')
    let vy = block.style.getPropertyValue('--vy')
    vy -= 1;
    // Get the current position
    const currentLeft = parseInt(block.style.left || 0, 10);
    const currentTop = parseInt(block.style.top || 0, 10);

    // Update the position
    block.style.left = `${currentLeft + vx / latency}px`;
    block.style.top = `${currentTop - vy / latency}px`;
    
    if (notEnded && (currentTop - vy > container.offsetHeight + 130)) {
        
        decreaseHP(10)

        endSandwitch(container, block);
        return;
    }
    [
        ["--vy", vy],
        ["--vx", vx],
    ].forEach(val => {
        block.style.setProperty(val[0], val[1]);
    })
    setTimeout(() => {
        upPosition(block, container);
    }, 10)
}



function endSandwitch(container, block) {
    Array.from(block.children).forEach(bl => {
        bl.style.animation = 'explode 3s forwards';
    });

    [
        ["--vy", 0],
        ["--vx", 0]
    ].forEach(val => {
        block.style.setProperty(val[0], val[1]);
    });

    notEnded = false;
    setTimeout(() => {
        container.removeChild(block);
    }, 300);

}
