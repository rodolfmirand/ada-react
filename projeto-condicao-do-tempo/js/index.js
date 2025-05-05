"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-localizacao');
const sectionInfos = document.querySelector('#tempo-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionInfos)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert('O local precisa ter pelo menos 3 digitos');
        return;
    }
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e1adeded802cd3002eca6a91c08262fb&lang=pt_br&units=metric`);
    const data = yield response.json();
    console.log(data);
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
}));
