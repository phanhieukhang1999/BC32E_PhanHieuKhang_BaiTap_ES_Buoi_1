
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffrom", "fuschia", "cinnabar"];

// window.onload = () => {
//     loadColor(colorList)
// }

function loadColor(colorList) {
    let html = '';
    for (let value of colorList) {
        console.log(value);

        html += `<button class="color-button ${value}" onclick="changeColorHouse('${value}') "></button>`
        // html += 0 === value ? `<button class="color-button ${value} active" onclick="changeColorHouse('${value}') "></button>` : `<button class="color-button ${value} " onclick="changeColorHouse('${value}') "></button>`
    }

    document.querySelector('#colorContainer').innerHTML = html;
}

loadColor(colorList)



const changeColorHouse = (value) => {

    document.querySelector('#house').className = `house ${value}`;
}










// let container = document.getElementById('colorContainer');

// loadColorPick = (() => {
//     for (let index = 0; index < colorList.length; index++) {
//         container.innerHTML += 0 == index ?
//             "<button class='color-button " + colorList[index] + " active'></button>" :
//             "<button class='color-button " + colorList[index] + "'></button>"
//     }
// });

// loadColorPick();

// let colorUserPick = document.getElementsByClassName('color-button');
// let house = document.getElementById('house');

// for (let index = 0; index < colorUserPick.length; index++) {
//     colorUserPick[index].addEventListener("onclick", function () {
//         changeColor(colorList[index], index)
//     });

// };

// changeColor = ((index, arr) => {
//     for (let index = 0; index < colorUserPick.length; index++) {
//         colorUserPick[index].classList.remove("active");
//     }
//     colorUserPick[arr].classList.add("active"),
//     house.className = "house" + index;
// }
// );


