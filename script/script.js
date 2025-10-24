const arrCards = [
    {
        id: 1,
        image: "public/image/products/тросс 1 5.png",
        title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 2,
        image: "public/image/products/ремень12 5.png",
        title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
        status: "order",
        descriptionStatus: "Под заказ",
    },
    {
        id: 3,
        image: "public/image/products/тросс 6 6.png",
        title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 4,
        image: "public/image/products/тросс 1 5.png",
        title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 5,
        image: "public/image/products/тросс 4 8.png",
        title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 6,
        image: "public/image/products/ремень12 5.png",
        title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 7,
        image: "public/image/products/photomode_03102023_190535.png",
        title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 8,
        image: "public/image/about/image_left/image-1.webp",
        title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
    {
        id: 9,
        image: "public/image/about/image_top/image_37.webp",
        title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
        status: "stock",
        descriptionStatus: "В наличии 50 м.",
    },
]

window.addEventListener("DOMContentLoaded", ()=>{
    const burger = document.querySelector("#burger"),
        linkItemsMobile = document.querySelectorAll(".header__modal .header__nav-link"),
        modalBurger = document.querySelector(".header__modal"),
        recommendationCards = document.querySelector(".recommendation__cards");

    burger.addEventListener("click", ()=>{
        burger.classList.toggle('active');
        modalBurger.classList.toggle('header__modal--active');
    });

    loadRecomendCards();
    linkModal();

    function loadRecomendCards(){
        arrCards.forEach(elem => {
            const newCard = document.createElement('article');
            newCard.classList.add('cards__item');

            newCard.innerHTML = `
            <img class="cards__item-image" src="${elem.image}" alt="image card products">
            
            <div class="cards__item-description">
                <p class="cards__item-title">${elem.title}</p>
                <div class="cards__item-status">
                    ${statusCard(elem.status)}
                    <span class="cards__item-span">${elem.descriptionStatus}</span>
                </div>
                <button class="cards__item-button button">Подробнее</button>
            </div>`;

            recommendationCards.append(newCard);
        });
    }

    function linkModal(){
        linkItemsMobile.forEach(item => {
            item.addEventListener("click", (event)=>{
                if(modalBurger.classList.contains("header__modal--active")){
                    modalBurger.classList.remove('header__modal--active');
                    burger.classList.remove('active');
                    console.log(`Редирект на страницу - ${item.textContent}`);
                }
            });
        });
    }

    function statusCard(status){
        if(status == "stock"){
            return `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14" height="14" rx="7" fill="#4FCF36"/>
                <path d="M4 6.33333L6.21053 9L10 5" stroke="white" stroke-linecap="round"/>
            </svg>
            `;
        }
        return `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14" height="14" rx="7" fill="#EE753E"/>
                <path d="M4 6.33333L6.21053 9L10 5" stroke="white" stroke-linecap="round"/>
            </svg>
        `;
    }
})
//<img class="cards__item-image" src="${elem.image}" alt="image card products">

//<div class="cards__item-image">
//                <img src="${elem.image}" alt="image card products">
//            </div>