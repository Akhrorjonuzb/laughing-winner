const menu=[
    {
        id: 1,
        title: "americano-coffee",
        category:"coffee",
        price: 2.5,
        img:"./Images/americano-coffee.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 2,
        title: "cappucino",
        category:"coffee",
        price: 3.2,
        img:"./Images/cappucino.jpg",
        desc: 'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.',
    },
    {
        id: 3,
        title: "espresso",
        category:"coffee",
        price: 3.5,
        img:"./Images/espresso.jpg",
        desc: 'Sugar, sugar substitutes, milk or cream are often used to lessen the bitter taste or enhance the flavor.',
    },
    {
        id: 4,
        title: "latte-americano",
        category:"coffee",
        price: 4.5,
        img:"./Images/latte-americano.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 5,
        title: "burger",
        category:"fast-food",
        price: 7.5,
        img:"./Images/burger.jpg",
        desc: 'The term burger can also be applied to the meat patty on its own, especially in the United Kingdom, where the term patty is rarely used',
    },
    {
        id: 6,
        title: "hot-dog",
        category:"fast-food",
        price: 6.4,
        img:"./Images/hot-dog.jpg",
        desc: 'Burger was a majority variety but its influence has steadily decreased and now it is used primarily in bulk jug wine production.',

    },
    {
        id: 7,
        title: "cake",
        category:"desserts",
        price: 9.8,
        img:"./Images/cake.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 8,
        title: "dougnut",
        category:"desserts",
        price: 7.5,
        img:"./Images/dougnut.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 9,
        title: "sweet",
        category:"desserts",
        price: 6.2,
        img:"./Images/sweets.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 10,
        title: "hot-chocolate",
        category:"drinks",
        price: 7.9,
        img:"./Images/hot-chocolate.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 11,
        title: "vanilla",
        category:"drinks",
        price: 9.9,
        img:"./Images/vanilla-tea.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    {
        id: 12,
        title: "vanilla",
        category:"drinks",
        price: 3.9,
        img:"./Images/greenTea.jpg",
        desc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",

    },
    
];

const container=document.querySelector('.container');



const btnContainer=document.querySelector('.btn-container');



// load items
window.addEventListener("DOMContentLoaded", function(){
// console.log("shake and bake");
menuDisplayItems(menu);

displayMenuButtons();
// buttonsFunction();



});


// function buttonsFunction(){
    
    
    // }




function menuDisplayItems(menuItems){
    let displayMenu=menuItems.map(function(item){
        // console.log(item);
    return `<div class="article coffee-category">
    <img src=${item.img} class="photo" alt="">
    
    <div class="section-info">
        
        <h2>${item.title}</h2>  
        <div class="price">
            <h3>$${item.price}</h3></div>
        <p>${item.desc}</p>
    
        
    </div>
    </div>`;
    }); 
    displayMenu=displayMenu.join("");
    container.innerHTML=displayMenu;
    // console.log(displayMenu);


}

function displayMenuButtons(){

    const categoryItems=menu.reduce(function(value, item){
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        else{
            return value;
        }
    return value;
    }, ['all']);
    // console.log(categoryItems);
    const categoryBtns=categoryItems.map(function(btnCategory){
    return `<button class="button" type="button" data-id=${btnCategory}>${btnCategory}</button>`;
    
    }).join("");
    btnContainer.innerHTML=categoryBtns;
    const buttons=document.querySelectorAll('.button');
    
    // buttons
        
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(akhrorjon){
            // console.log(e.currentTarget.dataset.id);
            const currentTarget= akhrorjon.currentTarget.dataset.id;
            const menuFilter=menu.filter(function(btnItems){
                if(btnItems.category === currentTarget){
                    return btnItems;
                }
                
            });
            // console.log(menuFilter);
            // console.log(categoryFilter);
            if(currentTarget === "all"){
                menuDisplayItems(menu);
            }
            else{
                menuDisplayItems(menuFilter);
            }
        });
        
        });
        

}