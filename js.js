function getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
}

async function data(){
    const res = await getData();
    console.log(res)
    addDOM(res);

}
function addDOM(res){
    console.log(res)
    let active = []
    let conteiner = document.getElementsByClassName('conteiner')[0];
    for(let i = 0; i < res.length;i++){
        let newElement = document.createElement('div');
        newElement.classList.add('card');
        newElement.id = res[i].id;
        if (i <= 19){
            active.push(newElement)
        } else{
            newElement.classList.add('hide')
        }
        newElement.innerHTML = res[i].title;
        conteiner.appendChild(newElement);
    }
}
data()

let but = document.getElementsByClassName('pag');

for(let i = 0; i < but.length; i++){
    but[i].addEventListener('click',function(){
        clearAll();
        show(20,this.id)
    },false)
}
function clearAll(){
    let card = document.getElementsByClassName('card');
    for(let i = 0; i < card.length; i++) {
            card[i].classList.add('hide');
            card[i].classList.remove('show');
    };
}
function show(kil, id){
    kil = parseInt(kil)
    id = parseInt(id)
    let card = document.getElementsByClassName('card');
    for(let i = 0; i < card.length; i++) {
        let min = (id-1)*kil;
        let max = ((id)*kil);
        if(card[i].id >= min && card[i].id <= max){
            console.log("min " + min + "   max " + max + "  i =" + i)

            card[i].classList.add('show');
            card[i].classList.remove('hide');
        }
        
    };
}

