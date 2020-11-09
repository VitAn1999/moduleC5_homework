const btnRequest = document.querySelector('#btn-request');
const resultNode = document.querySelector('.result');


const useRequest = url => {
    return fetch(url)
        .then(response => {
            return response.url;
        })
        .catch(error => {
            console.log('error', error);
        });
};

btnRequest.addEventListener('click', async function () {
    let inputValWidth = document.querySelector('#input-val-1').value;
    let inputValHeight = document.querySelector('#input-val-2').value;
    if ((Number(inputValWidth) >= 100 && Number(inputValWidth) <= 300) &&
    (Number(inputValHeight) >= 100 && Number(inputValHeight) <= 300)) {
        let fetchURL = 
        `https://picsum.photos/${inputValWidth}/${inputValHeight}`;
        let imgURL = await useRequest(fetchURL);
        resultNode.innerHTML = 
        `<div class="card">
            <img class="card-image" src="${imgURL}"/>
        </div>`;
    } else {
        resultNode.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
    }
});