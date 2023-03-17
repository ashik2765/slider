const images = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
    'img/img-4.jpg',
    'img/img-5.jpg',
    'img/img-6.jpg',
    'img/img-7.jpg',
    'img/img-8.jpg',
    'img/img-9.jpg',
    'img/img-10.jpg'
]
    

let imgIndex = 0;
const imgEl = document.getElementById('silder-img');
setInterval(() =>{
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgurl = images[imgIndex]

    console.log(imgIndex,imgurl);
    imgEl.setAttribute('src', imgurl)
    imgIndex++;
},2000)