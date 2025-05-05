const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = document.querySelector('#input-localizacao');
const sectionInfos = document.querySelector('#tempo-info');

form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!input || !sectionInfos) return;

    const localizacao = input.value;

    if (localizacao.length < 3) {
        alert('O local precisa ter pelo menos 3 digitos');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e1adeded802cd3002eca6a91c08262fb&lang=pt_br&units=metric`);

    const data = await response.json();
    console.log(data)

    const infos = {
        temp: Math.round(data.main.temp) + "º",
        local: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };

    sectionInfos.innerHTML = `
        <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temp}</span>
        </div>
        <img src="${infos.icon}" alt="">
    `;
});
