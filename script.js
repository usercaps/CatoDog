//fetch



function DogButton(){
    document.querySelector('.content').innerHTML = "";
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(Response =>{
        Response.json()
        .then(data => {
            let newImg = document.createElement('img');
                nameDog = document.createElement('p'),
                weight = document.createElement('p');
            newImg.src = data[0].url;
            newImg.alt = 'dog';
            nameDog.innerHTML = data[0].breeds[0].name;
            weight.innerHTML = data[0].breeds[0].weight.metric;
            document.querySelector('.content').append(newImg, nameDog, weight);
            // document.getElementById("name").innerHTML = data[0]["name"];
            // document.getElementById("weight").innerHTML = data[0]["weight_imperial"];
            console.log(data[0].url);
            console.log(data[0].breeds[0].name);
            console.log(data[0].breeds[0].weight.metric);
        })
    });
}

//при относительно быстром клике на кнопки не выводит следующее животное(((


function CatButton(){
    document.querySelector('.content').innerHTML = "";
    fetch('https://api.thecatapi.com/v1/images/search')
.then(Response =>{
    Response.json()
    .then(data => {
        let newImg = document.createElement('img');
            nameCat = document.createElement('p'),
            age = document.createElement('p');
        newImg.src = data[0].url;
        newImg.alt = 'cat';
        nameCat.innerHTML = data[0].breeds[0].name;
        age.innerHTML = data[0].breeds[0].life_span;
        document.querySelector('.content').append(newImg, nameCat, age);
        console.log(data[0].url);
        console.log(data[0].breeds[0].name);
        console.log(data[0].breeds[0].life_span);
    })
});
}
