const btnRequest = document.querySelector('#btn-request');
const btnClearing = document.querySelector('#btn-clearing');
const resultNode = document.querySelector('.result');

let saveStore = localStorage.getItem('saveStoreKey');
if (saveStore !== null) {
    resultNode.innerHTML = localStorage.getItem('saveStoreKey');
}

const useRequest = url => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(jsonResnobse => {
            return jsonResnobse;
        })
        .catch(error => {
            console.log('error', error);
        });
};

async function displayImg(numPage, countImg) {
    let cards = '';
    let fetchURL = 
        `https://picsum.photos/v2/list?page=${numPage}&limit=${countImg}`;
        let imgContent = await useRequest(fetchURL);
        imgContent.forEach(item => {
            const cardBlock = 
            `<div class="card">
                <img class="card-image" src="${item.download_url}"/>
            </div>`;
            cards = cards + cardBlock;
        });
    
    console.log(fetchURL);
    resultNode.innerHTML = cards;
    localStorage.setItem('saveStoreKey', cards);
}

btnRequest.addEventListener('click', async function () {
    let numberPage = document.querySelector('#input-val-1').value;
    let countImage = document.querySelector('#input-val-2').value;
        if ((Number(numberPage) >= 1 && Number(numberPage) <= 10) &&
        (Number(countImage) >= 1 && Number(countImage) <= 10)) {
            displayImg(numberPage, countImage);
        } else if ((Number(numberPage) >= 1 && Number(numberPage) <= 10) &&
        (Number(countImage) < 1 || Number(countImage) > 10)) {
            resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
        } else if ((Number(numberPage) < 1 || Number(numberPage) > 10) &&
        (Number(countImage) >= 1 && Number(countImage) <= 10)) {
            resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        } else {
            resultNode.innerHTML = `Номер страницы и лимит
            вне диапазона от 1 до 10`;
        }
});

btnClearing.addEventListener('click', () => {
    resultNode.innerHTML = '';
    localStorage.clear();

})