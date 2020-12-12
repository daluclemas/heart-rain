const container=document.querySelector('.container');

const createHeart=()=>{
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.innerText='💜';
    container.appendChild(heart);
    
   
    heart.style.left=Math.random()*100 + 'vw';
    heart.style.animationDuration=Math.random()*2+3+'s';

    setTimeout(()=>{
        heart.remove();
    },5000)
}
setInterval(createHeart,100);