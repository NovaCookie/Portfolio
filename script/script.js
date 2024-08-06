// Function to dynamically create HTML elements from the JSON file
async function createHeroFromJSON() {
    const containerHero = document.querySelector("#home .container-fluid");
    let row = document.createElement("div");
    row.classList.add("row", "align-item-center");

    // Load the JSON file
    await fetch("data/data.json")
        .then(response => response.json())
        .then((data) => {
            row.innerHTML = `
           
                <div class="col mx-auto hero-text">
                    <h1 class="hero_title">${data[0].hero_title}</h1>
                    <p class="hero_desc">${data[0].hero_desc}</p>
                </div>  

            `;
            containerHero.appendChild(row)
        });
}
// Function to dynamically create HTML elements from the JSON file
async function createAboutFromJSON() {
    const container = document.querySelector("#about .container");
    let row = document.createElement("div");
    row.classList.add("row", "align-items-center");

    // Load the JSON file
    await fetch("data/data.json")
        .then(response => response.json())
        .then((data) => {
            row.innerHTML = `
            <div class="d-lg-flex row-lg mt-5"> 
                <div class="col-lg-3 mx-auto d-flex justify-content-center mb-5">
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-8">
                    <p class="mb-5">${data[1].text}</p>
                    <h3 class="text-center">Télécharger mon CV</h3>
                    <div class="d-flex justify-content-center">
                        <a class="btn mt-5" href="${data[1].cv}" download><i class="fa fa-download"></i> Clique ici !</a>
                    </div>  
                </div>
            </div>  
                `;
            container.appendChild(row)
        });
}
// Function to dynamically create HTML elements from the JSON file
async function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    await fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("d-lg-flex", "align-item-center", "col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <h3 class="card-title mt-3">${item.title}</h4>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Function to dynamically create HTML elements from the JSON file
async function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    await fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("d-flex", "col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                        <div class="card-body">
                            <h4 class="card-title m-2">${item.title}</h4>
                            <p class="card-text">${item.text}</p>
                        </div>   
                            <div class="card-footer">
                            <div class="row">
                                <div class="col-6">
                                    <a href="${item.githubLink}" class="btn">Github</a>
                                </div>
                                <div class="col-6">
                                    <a href="${item.aperçusLink}" class="btn">Aperçu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Call the functions to execute the code
createHeroFromJSON();
createAboutFromJSON();
createSkillsFromJSON();
createPortfolioFromJSON();


// <img src="./images/${item.image}" alt="${item.alt}"/>
// <img src="images/${item.image}" alt="${item.alt}">
// <img src="${data[1].image}" class="${data[1].class}" alt="${data[1].alt}"/>
// <img src="${data[0].image}" alt="${data[0].alt}"/>


