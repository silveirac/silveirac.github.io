// import animals from "./script/dados.js"

function createCard(title, description, imgUrl) {
    let cardContainer = document.getElementById("card-container");
    let card = document.createElement("div");
    card.innerHTML = `
    <img src="${imgUrl}">
    <h2>${title}</h2>
    <p>${description}}</p>
    `;

    cardContainer.appendChild(card);
};

// cardContainer.classList.add("item");

const animals = [
    {title : "O tigre", description : "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.", imgUrl : "./imagens/tiger.jpg"},
    {title : "O leão", description : "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.", imgUrl : "./imagens/leon.jpg"},
    {title : "O leopardo", description : "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).", imgUrl : "./imagens/leopardo.jpg"},
    {title : "A pantera negra", description : "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.", imgUrl : "./imagens/pantera-negra.jpg"},
    {title : "O jaguar", description : "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).", imgUrl : "./imagens/jaguar.jpg"},
    {title : "O guepardo", description : "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.", imgUrl : "./imagens/chita.jpg"}
];

animals.map(element => {
    createCard(element.title, element.description, element.imgUrl)
}
);