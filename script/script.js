// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
}

// Function to dynamically create HTML elements from the JSON file
function createAboutFromJSON() {
    const container = document.querySelector("#about .container");
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("align-items-center");

    // Load the JSON file
    fetch("data/about.json")
        .then(response => response.json())

        .then((data) => {
            const info = data[0];
            const img = info.image[0];
            const id = img.id;
            row.innerHTML = `
            <div class="row mt-5"> 
                <div class="col-3">
                <img src="${img.src}" id="${img.id}" class="${img.class}" alt="${img.alt}"/>
                </div>
                <div class="col-1"></div>
                <div class="col-8">
                    <p>${info.text}</p>
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
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" />
                            <h4 class="card-title mt-3">${item.title}</h4>
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
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                        <div class="card-body">
                            <img src="images/${item.image}">
                            <h4 class="card-title m-2">${item.title}</h4>
                            <p class="card-text">${item.text}</p>
                                <div class="row text-center mt-3 mb-2">
                            <div class="col">
                                <a href="${item.githubLink}" class="btn">Github</a>
                            </div>
                            <div class="col">
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
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();



