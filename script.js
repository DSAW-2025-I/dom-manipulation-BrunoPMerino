let numImage = 1;

const btnLeft = document.querySelector('.btnleft');
const btnRight = document.querySelector('.btnright');
const imageElement = document.querySelector('.img1 img');
const images = [
    "./assets/image_1.jpg", 
    "./assets/image_2.jpeg", 
    "./assets/image_3.jpeg"  
];

function changeImageRight(){
    if (numImage == 3){
    }else{
        btnLeft.style.filter = "brightness(100%)";
        btnLeft.style.cursor = "pointer";
        numImage++;
        updateImage();
        if (numImage == 3){
            btnRight.style.filter = "brightness(50%)";
            btnRight.style.cursor = "default";
        }
    }
}

function changeImageLeft (){
    if (numImage == 1){  
    }else{
        btnRight.style.filter = "brightness(100%)";
        btnLeft.style.cursor = "pointer";
        numImage--;
        updateImage();
        if (numImage == 1){
            btnLeft.style.filter = "brightness(50%)";
            btnLeft.style.cursor = "default";
        }
    }
}

function updateImage(){
    imageElement.style.opacity = "0"; 
    setTimeout(() => {
        imageElement.src = images[numImage - 1]; 
        imageElement.style.opacity = "1"; 
    }, 300); 
}


btnRight.addEventListener("click", changeImageRight)
btnLeft.addEventListener("click", changeImageLeft)

