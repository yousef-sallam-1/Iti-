// tassssssssssssssssssssssssssssssk//
async function api() {
    let res = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    let data = await res.json();

    let container = document.getElementById("container");

    data.recipes.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("yousef");

        card.innerHTML = `
         <img src="${item.image_url}" >
            <p> ${item.title}</p>
            
           
        `;

        container.appendChild(card);
    });

    
}

api();






// let userNameInput=document.querySelector(`#ss`);
// let addbtn=document.querySelector(`#btn`);

// addbtn.addEventListener(`click`,function()
// {
//     localStorage.setItem(`userName`, userNameInput.value);
// })