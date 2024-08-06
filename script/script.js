// Function to dynamically create HTML elements from the JSON file
async function createAboutFromJSON() {
    const container = document.querySelector("#about .container");
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("align-items-center");

    // Load the JSON file
    await fetch("data/about.json")
        .then(response => response.json())
        .then((data) => {
            const info = data[0];
            const img = info.image[0];
            row.innerHTML = `
            <div class="d-lg-flex row-lg mt-5"> 
                <div class="mx-auto mb-5 col-lg-3 col-md-6 ">
                <img src="${img.src}" id="${img.id}" class="${img.class}" alt="${img.alt}"/>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-8">
                    <p class="mb-5">${info.text}</p>
                    <h3 class="text-center">Télécharger mon CV</h3>
                    <div class="d-flex justify-content-center">
                        <a class="btn mt-5" href="${info.cv}" download><i class="fa fa-download"></i> Clique ici !</a>
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
                card.classList.add("d-lg-flex","align-item-center", "col-lg-4","mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="${item.alt}"/>
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
                            <img src="images/${item.image}" alt="${item.alt}">
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
createAboutFromJSON();
createSkillsFromJSON();
createPortfolioFromJSON();



