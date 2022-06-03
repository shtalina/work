let group = document.getElementById('get-users');

async function getResponse() {
    let response = await fetch('https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa=' + group);
    let content = await response.json();

}

getResponse()