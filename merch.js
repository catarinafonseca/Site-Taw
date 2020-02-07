let carts=document.querySelectorAll('.add-to-cart');

let prodcts={
    {
        name:'T-shirt Tell Me You Love Me',
        
    }
}


for(let i=0; i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
       cartNumbers(); 
    })
}

function cartNumbers(){
    let prodNumbers=localStorage.getItem('cartNumbers');
    prodNumbers=parseInt(prodNumbers);
    localStorage.setItem('cartNumbers',1);
}
