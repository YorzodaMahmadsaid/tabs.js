const myArray = ['Ман калон мешавам кахрамон мешавам', 'Ман дар синфи 10 мехонам', 'Ассалому алекум', 'Бале бародарчон'];

const content1 = document.getElementById('content_text1');
const content2 = document.getElementById('content_text2');
const content3 = document.getElementById('content_text3');
const content4 = document.getElementById('content_text4');

const clickOne = () => {
    console.log('Button one is clicked');
    content1.textContent = myArray[0];
    content1.classList.remove("bg-light");
    content1.classList.add("bg-warning");
    content2.textContent = null;
    content3.textContent = null;
    content4.textContent = null;
}

const clickTwo = () => {
    console.log('Button two is clicked');
    content2.textContent = myArray[1];
    content2.classList.remove("bg-light");
    content2.classList.add("bg-warning");
    content1.textContent = null;
    content3.textContent = null;
    content4.textContent = null;
}

const clickThree = () => {
    console.log('Button three is clicked');
    content3.textContent = myArray[2];
    content3.classList.remove("bg-light");
    content3.classList.add("bg-warning");
    content1.textContent = null;
    content2.textContent = null;
    content4.textContent = null;
}

const clickFour = () => {
    console.log('Button four is clicked');
    content4.textContent = myArray[3];
    content4.classList.remove("bg-light");
    content4.classList.add("bg-warning");
    content1.textContent = null;
    content2.textContent = null;
    content3.textContent = null;
}
