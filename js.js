function getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
}

async function data(){
    const res = await getData();
    addDOM(res);
}
let max_kil = 8;
let active = [];
let active_pag;
function addDOM(res){
    //console.log(res)
    let conteiner = document.getElementsByClassName('conteiner')[0];
    for(let i = 0; i < res.length;i++){
        let newElement = document.createElement('div');
        newElement.classList.add('card');
        newElement.id = res[i].id;
        if (i < max_kil){
            newElement.classList.add('show')
            active.push(newElement)
        } else{
            newElement.classList.add('hide')
        }
        newElement.innerHTML = res[i].title;
        conteiner.appendChild(newElement);
    }
    let pagination = document.getElementsByClassName('pagination')[0];
    for(let i = 0; i < Math.ceil(res.length / max_kil); i++){
        let pag = document.createElement('div');
        pag.classList.add('pag');
        if(i == 0) pag.classList.add('active_pag');
        pag.id = i+1;
        pag.innerHTML = i+1;
        pagination.appendChild(pag);
    }
    let but = document.getElementsByClassName('pag');
    let active_pag = document.getElementsByClassName('active_pag')[0];
for(let i = 0; i < but.length; i++){
    but[i].addEventListener('click',function(){
        clearAll();
            setTimeout(() =>{
                show(max_kil,but[i].id);
            },800); 
        
        active_pag.classList.remove('active_pag');
        but[i].classList.add('active_pag');
        active_pag = but[i];
    },false)
}
}
data()


function clearAll(){
    let card = active;
    card.reverse();
    for(let i = 0; i < card.length; i++) {
            setTimeout(() =>{
                card[i].classList.add('hide_animation');
                setTimeout(() =>{
                    card[i].classList.remove('show');
                    card[i].classList.add('hide');
                },95)
            },i*100)   
    };
}
function show(kil, id){
    kil = parseInt(kil)
    id = parseInt(id)
    
    let card = document.getElementsByClassName('card');
    active.length = 0;
    let counter = 0;
    for(let i = 0; i < card.length; i++) {
        let min = ((id-1)*kil) + 1;
        let max = ((id)*kil);
        if(card[i].id >= min && card[i].id <= max){
           // console.log("min " + min + "   max " + max + "  i =" + i)
            setTimeout(() =>{
                card[i].classList.add('show_animation');
                setTimeout(() =>{
                    console.log('show');
                    card[i].classList.add('show');
                    card[i].classList.remove('hide');
                },90)
            },counter*100);
            counter++;
            active.push(card[i]);
        }
        
    };
}

