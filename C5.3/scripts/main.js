const btnRequest = document.querySelector('#btn-request');
const resultNode = document.querySelector('.result');

function useRequest(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.response);
            if (cb) {
                cb(result);
            }
        } else {
            console.log('Response status: ', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.log('Miss. Response status: ', xhr.status);
    };

    xhr.send();
}

function displayResult(result) {
    let cards = '';

    result.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

btnRequest.addEventListener('click', function() {
    let inputVal = document.querySelector('#input-val').value;
    if (Number(inputVal)>0 && Number(inputVal)<=10) {
        useRequest(`https://picsum.photos/v2/list/?limit=${inputVal}`,
        displayResult);
    } else {
        resultNode.innerHTML = 'Число вне диапазона от 1 до 10';
    }
});