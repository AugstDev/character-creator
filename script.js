const hair = document.getElementById("hair");
const hairimg = document.getElementById("hairimg");
const headimg = document.getElementById("headimg");
const shirtimg = document.getElementById("shirtimg");

const grid = document.getElementById("gridImages");


const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


function ChangeImages(value){

    grid.setAttribute("filter", value)

    let Images = [
        value + '1.png',
        value + '2.png',
        value + '3.png',
        // Adicione mais imagens aqui conforme necessário
    ];

    let imageFolderPath = './assets/img/' + value + 's/';

    removeChilds(grid);

    Images.forEach( image =>{
        const imgElement = document.createElement('img');
        imgElement.src = imageFolderPath + image;
        imgElement.classList.add('grid-item');
        imgElement.addEventListener('click', function(e){
            changeChar(e.target.src)
        })
        grid.appendChild(imgElement);
    })

}

function changeChar(src) {
    const atualfilter = document.getElementById(grid.getAttribute("filter") + 'img')
    atualfilter.src = src;
}



function exportCharacter(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0,0, canvas.width, canvas.height);


    const images = document.querySelectorAll("#demo img")
    let imagesLoaded = 0;


    images.forEach((img,index) => {
        const imageElement = new Image();
        imageElement.src = img.src;
        console.log(img.src)
        imageElement.onload = () => {
            ctx.drawImage(imageElement,0,0,canvas.width,canvas.height);

            imagesLoaded++;

            if(imagesLoaded === images.length) {
                downloadImage();
            }
        }
    })
}

function downloadImage(){
    const canvas = document.getElementById("canvas");
    const link = document.createElement('a');

    link.download = 'character.png';
    link.href = canvas.toDataURL('image/png');

    link.click();

}

