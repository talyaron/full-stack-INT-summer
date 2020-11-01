//add keyboard event listner

const dragon = document.getElementById('dragon')
console.log(dragon.getBoundingClientRect());

db.collection('dragons').doc('dragon').onSapshot(dragon)

document.addEventListener('keyup',e=>{
   
    if(e.key === 'ArrowRight'){
        //do something
        console.log('right')
        const left = dragon.getBoundingClientRect().x;
        const up = dragon.getBoundingClientRect().y
        console.log(left)
        dragon.style.left = `${left+10}px`;
        
        db.collection('dragons').doc('dragon').set({
            left:left+10,
            up:up
        }).then(()=>console.log('saved'))
        .catch(e=>{console.error(e)})
        
    }

    if(e.key === 'ArrowLeft'){
        //do something
        console.log('left')
        const left = dragon.getBoundingClientRect().x 
       
        const up = dragon.getBoundingClientRect().y
        console.log(left)
        dragon.style.left = `${left-10}px`;
        db.collection('dragons').doc('dragon').set({
            left:left+10,
            up:up
        }).then(()=>console.log('saved'))
        .catch(e=>{console.error(e)})
    }

    if(e.key === 'ArrowUp'){
        //do something
        const up = dragon.getBoundingClientRect().y
        console.log(up)
        dragon.style.top = `${up-10}px`;
    }

    if(e.key === 'ArrowDown'){
        //do something
        const up = dragon.getBoundingClientRect().y
        console.log(up)
        dragon.style.top = `${up+10}px`;
    }
})