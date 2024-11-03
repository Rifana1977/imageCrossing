// Object to hold unique superhero descriptions based on animal combinations
const superheroDescriptions = {
    'giraffe-cheetah': {
        name: 'The Long-Legged Hunter',
        powers: 'Incredible speed and height advantage, able to spot danger from afar.',
        weaknesses: 'Susceptible to low-hanging branches while running at high speed.',
    },
    'giraffe-eagle': {
        name: 'Skywatcher',
        powers: 'Amazing vision and reach; can survey large areas from above.',
        weaknesses: 'Lacks speed on the ground, making it vulnerable during chases.',
    },
    'giraffe-elephant': {
        name: 'Mighty Defender',
        powers: 'Great strength and towering presence, can intimidate foes.',
        weaknesses: 'Slow movement can be a disadvantage in quick situations.',
    },
    'giraffe-crow': {
        name: 'The Agile Sentinel',
        powers: 'Good at scouting and reconnaissance; can access hard-to-reach places.',
        weaknesses: 'Fragile and easily outmatched in direct combat.',
    },
    'cheetah-eagle': {
        name: 'Sky Sprint',
        powers: 'Combines speed with aerial agility, perfect for fast ambushes.',
        weaknesses: 'Requires a lot of energy, leading to fatigue quickly.',
    },
    'cheetah-elephant': {
        name: 'Stampede Swift',
        powers: 'Speed and strength combined; can clear obstacles swiftly.',
        weaknesses: 'Loud movements can alert enemies before an attack.',
    },
    'cheetah-crow': {
        name: 'Shadow Stalker',
        powers: 'Fast and stealthy; great at evasion and surprise attacks.',
        weaknesses: 'Low endurance; can tire quickly in prolonged pursuits.',
    },
    'eagle-elephant': {
        name: 'The Fearsome Guardian',
        powers: 'Sky dominance with ground control; protects with ferocity.',
        weaknesses: 'Slow to react in high-speed situations.',
    },
    'eagle-crow': {
        name: 'The Watchful Sky',
        powers: 'Excellent for aerial reconnaissance and tactical advantage.',
        weaknesses: 'Not strong in hand-to-hand combat.',
    },
    'elephant-crow': {
        name: 'The Clever Behemoth',
        powers: 'Large and intimidating, but clever with strategies.',
        weaknesses: 'Slower response times compared to more agile opponents.',
    }
};

// Toggle the dropdown menu
function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId + 'Content');
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    
    // Close other dropdowns when one is opened
    allDropdowns.forEach((dropdown) => {
        if (dropdown !== dropdownContent) {
            dropdown.style.display = 'none';
        }
    });
    
    // Toggle the clicked dropdown
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Select animal and update image in the dropdown
function selectAnimal(animalNum, animalType) {
    const animalImage = document.getElementById(`animal${animalNum}Image`);
    let imageUrl;
    let animalName;

    switch (animalType) {
        case 'giraffe':
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5DWcuSUKBOG35IINuin_vM5uMTwvIWiLjw&s";
            animalName = "Giraffe";
            break;
        case 'cheetah':
            imageUrl = "https://www.shutterstock.com/image-photo/cheetah-hideaway-resting-natures-lap-600nw-2340314981.jpg";
            animalName = "Cheetah";
            break;
        case 'eagle':
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWPrif-V231JcsICWcduyakrV-jOWfIOh-A&s";
            animalName = "Eagle";
            break;
        case 'elephant':
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUutueGq6hos0KVJ-YNcuTBehC1KkRMV98hg&s";
            animalName = "Elephant";
            break;
        case 'crow':
            imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYwhMYpAP7K6wvttga3vn3ridmBYVXYyO3g&s";
            animalName = "Crow";
            break;
        default:
            imageUrl = "";
            animalName = "";
    }

    animalImage.src = imageUrl;
    animalImage.alt = animalName;
    document.getElementById(`dropdown${animalNum}Content`).style.display = 'none';
}

// Generate superhero based on selected animals
function createSuperhero() {
    const animal1 = document.getElementById("animal1Image").alt.toLowerCase();
    const animal2 = document.getElementById("animal2Image").alt.toLowerCase();
    const result = document.getElementById("result");

    if (animal1 && animal2) {
        const key = `${animal1}-${animal2}`;
        const reverseKey = `${animal2}-${animal1}`;
        const description = superheroDescriptions[key] || superheroDescriptions[reverseKey];
        
        if (description) {
            result.innerHTML = `Your superhero is called <strong>${description.name}</strong>!<br>
                                Powers: ${description.powers}<br>
                                Weaknesses: ${description.weaknesses}`;
        } else {
            result.innerHTML = "This combination doesn't have a unique superhero description.";
        }
    } else {
        result.innerHTML = "Please select both animals to create your superhero.";
    }
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown img')) {
        const allDropdowns = document.querySelectorAll('.dropdown-content');
        allDropdowns.forEach((dropdown) => {
            dropdown.style.display = 'none';
        });
    }
};
