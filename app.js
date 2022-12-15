const shopAtHome = document.querySelector(".shop_at_home__modal")
const vehiclesBanner = document.querySelector(".vehicles")
const closeX = document.querySelector(".close")
const navWhite = document.querySelector(".navbar")
const chevronDown = document.querySelector(".fa-chevron-down")
const chevronUp = document.querySelector(".fa-chevron-up")
const X = document.querySelector(".x")
const closeLan = document.querySelector(".closelan")
const nimadir = document.querySelector(".nimadir")
const language = document.querySelector(".language")
const search = document.querySelector(".search_banner")
console.log(search3);

function openVehicle(){
    search.classList.remove("show_search_banner")
    language.classList.remove("show__lan")
    shopAtHome.classList.remove("shop_at_home_show")
    vehiclesBanner.classList.toggle("show__vehicle")
    // navWhite.classList.toggle("navbar_white")
}

function clearVehicleX(){
    vehiclesBanner.classList.remove("show__vehicle")
}

function openShopAt(){
    search.classList.remove("show_search_banner")
    language.classList.remove("show__lan")
    vehiclesBanner.classList.remove("show__vehicle")
    shopAtHome.classList.toggle("shop_at_home_show")
}
function clearShopAtX(){
    shopAtHome.classList.remove("shop_at_home_show")
}

function openLanguage(){
    search.classList.remove("show_search_banner")
    shopAtHome.classList.remove("shop_at_home_show")
    vehiclesBanner.classList.remove("show__vehicle")
    language.classList.toggle("show__lan")
}
function closeLanguage(){
    language.classList.remove("show__lan")
}

function openSearch(){
    language.classList.remove("show__lan")
    shopAtHome.classList.remove("shop_at_home_show")
    vehiclesBanner.classList.remove("show__vehicle")
    search.classList.toggle("show_search_banner")
}

function closeSearch(){
    search.classList.remove("show_search_banner")
}