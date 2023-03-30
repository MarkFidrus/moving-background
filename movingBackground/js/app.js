let x = [],
    y = [];
let bgImage = document.getElementById('bg-img');

window.onload = () => {
    let activeBg = document.getElementsByClassName('active')[0].id;
    bgImage.src = './img/'+activeBg+'.png';

    for (const bg of document.getElementsByClassName('menu-item')) {
        bg.onclick = () => {
            bgImage.src = './img/'+bg.id+'.png';
        }
    }
}

window.onmousemove = (e) => {
    x.push(e.clientX);
    y.push(e.clientY);

    if (x.length >= 2)
    {
        checkXMovement(x[x.length - 1], x[x.length - 2]);
        x = [];
    }
    if (y.length >= 2)
    {
        checkYMovement(y[y.length - 1], y[y.length - 2]);
        y = [];
    }
}

document.getElementById('menu-btn').onclick = () => {
    let menuList = document.getElementById('menu-list');
    let arrow = document.getElementById('arrow');
    let close = document.getElementById('close');
    if (menuList.offsetHeight > 0)
    {
        close.style.display = 'none';
        arrow.style.display = 'block';
        menuList.style.height = 0;
    }
    else 
    {
        arrow.style.display = 'none';
        close.style.display = 'block';
        menuList.style.height = 120 + 'px';
    }
}

function checkXMovement(value1, value2)
{
    if (value1 > value2)
    {
        moveImageX('negative');
    }
    else if (value1 < value2)
    {
        moveImageX('positive');
    }
}


function checkYMovement(value1, value2)
{
    if (value1 > value2)
    {
        moveImageY('negative');
    }
    else if (value1 < value2)
    {
        moveImageY('positive');
    }
}

function moveImageX(direction)
{
    switch (direction)
    {
        case 'positive':
            if (bgImage.offsetLeft < 100)
            {
                bgImage.style.left = bgImage.offsetLeft + 2 + 'px';
            }
            break;
        case 'negative':
            if (bgImage.offsetLeft > -100)
            {
                bgImage.style.left = bgImage.offsetLeft - 2 + 'px';
            }
            break;
    }
}

function moveImageY(direction)
{
    switch (direction)
    {
        case 'positive':
            if (bgImage.offsetTop < 90)
            {
                bgImage.style.top = bgImage.offsetTop + 2 + 'px';
            }
            break;
        case 'negative':
            if (bgImage.offsetTop > -90)
            {
                bgImage.style.top = bgImage.offsetTop - 2 + 'px';
            }
            break;
    }
    
}