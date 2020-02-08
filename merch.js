let carts=document.querySelectorAll('.add-to-cart');

let products=[
    {
        name:'T-shirt Tell Me You Love Me',
        tag:'tshirtlove',
        price:99.99,
        inCart:0,        
    },
    {
        name:'T-shirt Sorry Not Sorry + Digital Album',
        tag:'tshirtsorry',
        price:150.00,
        inCart:0, 
    },
    {
        name:'Tour Hoddie',
        tag:'tourhoddie',
        price:200.00,
        inCart:0, 
    },
    {
        name:'Demi Sweatshirt',
        tag:'demisweat',
        price:69.99,
        inCart:0, 
    },
    {
        name:'Tell Me You Love Me Bomber Jacket',
        tag:'jacket',
        price:250.00,
        inCart:0, 
    },
    {
        name:'Sorry not Sorry Hat + Digital Album',
        tag:'hatsorry',
        price:150.00,
        inCart:0, 
    },
    {
        name:'Demi Beanie',
        tag:'beanie',
        price:60.00,
        inCart:0, 
    },
    {
        name:'Confident Mug',
        tag:'mug',
        price:49.99,
        inCart:0, 
    }


]


for(let i=0; i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
       cartNumbers(); 
    })
}

function cartNumbers(){
    let prodNumbers=localStorage.getItem('cartNumbers');

    prodNumbers=parseInt(prodNumbers);

    if(prodNumbers){
        localStorage.setItem('cartNumbers',prodNumbers + 1);
        document.querySelector('.btn span').textContent= (prodNumbers + 1);
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.btn span').textContent=1;
    }
}
