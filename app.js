const shopAtHome = document.querySelector(".shop_at_home__modal")
const vehiclesBanner = document.querySelector(".vehicles")
const closeX = document.querySelector(".close")
const navWhite = document.querySelector(".navbar")
const chevronDown = document.querySelector(".fa-chevron-down")
const chevronUp = document.querySelector(".fa-chevron-up")


function openVehicle(){
    shopAtHome.classList.remove("shop_at_home_show")
    vehiclesBanner.classList.toggle("show__vehicle")
    // navWhite.classList.toggle("navbar_white")
}

function clearVehicleX(){
    vehiclesBanner.classList.remove("show__vehicle")
}

function openShopAt(){
    vehiclesBanner.classList.remove("show__vehicle")
    shopAtHome.classList.toggle("shop_at_home_show")
}