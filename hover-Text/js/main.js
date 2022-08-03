const heading = document.querySelector(".heading");
hoverJumpText = (text => {

    let chars = [...text];
    return chars.map(text => `<span>${text}</span>`).join("")

});

heading.innerHTML = hoverJumpText(heading.innerText);

