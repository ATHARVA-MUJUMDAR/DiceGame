var randomvariable1=Math.random()*6+1;
randomvariable1=Math.floor(randomvariable1);


if(randomvariable1===1)
{
    const img1 = document.getElementsById('img1');
    img1.setAttribute('src','dice1.png');
}
else if(randomvariable1===2)
{
    const img1 = document.getElementById('img1');
    img1.setAttribute('src','dice2.png');
}
else if(randomvariable1===3)
{
    const img1 = document.getElementById('img1');
    img1.setAttribute('src','dice3.png');
}
else if(randomvariable1===4)
{
    const img1 = document.getElementById('img1');
    img1.setAttribute('src','dice4.png');
}
else if(randomvariable1===5)
{
    const img1 = document.getElementById('img1');
    img1.setAttribute('src','dice5.png');
}
else
{
    const img1 = document.getElementById('img1');
    img1.setAttribute('src','dice6.png');
}

var randomvariable2=Math.random()*6+1;
randomvariable2=Math.floor(randomvariable2);


if(randomvariable2===1)
{
    const img1 = document.getElementsById('img2');
    img1.setAttribute('src','dice1.png');
}
else if(randomvariable2===2)
{
    const img1 = document.getElementById('img2');
    img1.setAttribute('src','dice2.png');
}
else if(randomvariable2===3)
{
    const img1 = document.getElementById('img2');
    img1.setAttribute('src','dice3.png');
}
else if(randomvariable2===4)
{
    const img1 = document.getElementById('img2');
    img1.setAttribute('src','dice4.png');
}
else if(randomvariable2===5)
{
    const img1 = document.getElementById('img2');
    img1.setAttribute('src','dice5.png');
}
else
{
    const img1 = document.getElementById('img2');
    img1.setAttribute('src','dice6.png');
}

if(randomvariable1>randomvariable2)
{
    document.getElementById("message").innerHTML = "Player-1 Wins";
}
else if(randomvariable2>randomvariable1)
{
    document.getElementById("message").innerHTML = "Player-2 Wins";
}
else
{
    document.getElementById("message").innerHTML = "Draw";
}