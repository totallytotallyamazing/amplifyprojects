let currentIndex = 0;
const len = document.getElementById('carousel').children.length;

// Standard loop
// const vanNext = () => {
//     if (currentIndex < (len - 1)) {
//         currentIndex += 1;
//         document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
//     console.log('currentIndex: ' + currentIndex);
// };

// Infinite loop
const vanNext = () => {
    if (currentIndex < (len - 1)) {
        currentIndex += 1;
        document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === (len - 1)) {
        currentIndex = 0;
        document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    console.log('currentIndex: ' + currentIndex);
};

// Standard loop
// const vanPrev = () => {
//     if (currentIndex > 0) {
//         currentIndex -= 1;
//         document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
// };

// Infinite loop
const vanPrev = () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === 0) {
        currentIndex = len -1;
        document.getElementById('carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    console.log('currentIndex: ' + currentIndex);
};