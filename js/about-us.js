/* ------ FOOTER TIME DISPLAY START ------ */
const timer = () => {
    let now = new Date();
    document.querySelector("#date").textContent =
        now.toLocaleTimeString();
    /* NOT needed for now, will come back to this code, though
    + " " +
    now.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }); */
}
setInterval(timer, 1000);
/* ------ FOOTER TIME DISPLAY END ------ */

/* ------ about-us.html BANNER IMAGE ROLLOVER START ------ */
document.addEventListener('DOMContentLoaded', function() {
    const bannerImage = document.getElementById('banner-img-about-us');
    bannerImage.addEventListener('mouseenter', () => bannerImage.src =
        'images/about-us/about-us-2.png');
    bannerImage.addEventListener('mouseleave', () => bannerImage.src =
        'images/about-us/about-us-1.png');
});
/* ------ about-us.html BANNER IMAGE ROLLOVER END ------ */

/* ------ PROGRAMMING LANGUAGE CARDS START (CONTINUES FOR REST OF FILE) ------ */
const form = document.querySelector("form");

form.addEventListener("change", function(evt) {
    evt.preventDefault();

    let cardsDiv = document.querySelector('.cards');
    cardsDiv.innerHTML = '';

    let selectedDifficulty = form.elements.difficulty.value;
    console.log(selectedDifficulty);

    let selectedLanguages = languages.filter((arrItem) => arrItem.difficulty === selectedDifficulty);

    if (selectedLanguages.length > 0) {
        for (const language of selectedLanguages) {
            cardsDiv.insertAdjacentHTML('beforeend', `
            <div class="card">
                    <img src="${language.image}" alt=""> 
                    <div class="text">
                    <h3>${language.name}</h3>
                    <p>
                    Released in ${language.released}, <i>${language.name}</i> is a ${language.typed.toLowerCase()} programming 
                    language with a ${language.performance.toLowerCase()} level of performance. It's an
                    ${language.build.toLowerCase()} language that's considered of 
                    ${language.difficulty.toLowerCase()} difficulty to learn.
                     </p>
                    <p>
                    <b>Use Cases:</b>
                    <ul>
                    ${language.use_cases.map(useCase => `<li>${useCase}</li>`).join("")}
                    </ul>
                    </p>
	                <p>👩👨️️ ${language.name} estimated user base: <br />${language.users}</p>
                    </div>
                </div>
            `);
        }
    }
    else{
        cardsDiv.insertAdjacentHTML("beforeend", `<h3>Error: Select Another Difficulty</h3>`);
    }
});

/*  The form looks terrible without a difficulty selected, so the following code auto-selects Easy as this just so
    happens to have 3 related elements, which looks well on the page. The change event will auto-trigger when the page is
    loaded. It needs a timeout call to work, even though there is no timeout. Using selected on the HTML element alone
    doesn't work. I'm placing this down here, despite already having a DOMContentLoaded event listener, as I want to
    ensure it functions as intended, so am avoiding placement before the form listener. */
document.addEventListener("DOMContentLoaded", () => {
    const difficultySelect = document.getElementById("difficulty");
    difficultySelect.value = "Easy";
    setTimeout(() => {
        difficultySelect.dispatchEvent(new Event("change", { bubbles: true }));
    }, 0);
});

/* ARRAY OF OBJECTS CONTINUES FOR THE REST OF FILE */
const languages = [
    {
        "name": "Java",
        "image": "images/about-us/programming-languages/java.png",
        "released": 1995,
        "typed": "Statically Typed",
        "build": "Compiled-Interpreted",
        "performance": "High",
        "difficulty": "Moderate",
        "use_cases": [
            "Enterprise Applications",
            "Mobile Application Development",
            "Web Applications",
            "Game Development"
        ],
        "users": "~10 Million"
    },
    {
        "name": "Python",
        "image": "images/about-us/programming-languages/python.png",
        "released": 1991,
        "typed": "Dynamically Typed",
        "build": "Interpreted",
        "performance": "Moderate",
        "difficulty": "Easy",
        "use_cases": [
            "Web Development",
            "Data Science",
            "Machine Learning",
            "Automation"
        ],
        "users": "~8 Million"
    },
    {
        "name": "C",
        "image": "images/about-us/programming-languages/c.png",
        "released": 1972,
        "typed": "Statically Typed",
        "build": "Compiled",
        "performance": "High",
        "difficulty": "High",
        "use_cases": [
            "System Programming",
            "Embedded Systems",
            "Operating Systems",
            "Game Development"
        ],
        "users": "~5 Million"
    },
    {
        "name": "JavaScript",
        "image": "images/about-us/programming-languages/js.png",
        "released": 1995,
        "typed": "Dynamically Typed",
        "build": "Interpreted",
        "performance": "Moderate",
        "difficulty": "Moderate",
        "use_cases": [
            "Web Development",
            "Server-side Development",
            "Mobile Applications",
            "Game Development"
        ],
        "users": "~12 Million"
    },
    {
        "name": "Ruby",
        "image": "images/about-us/programming-languages/ruby.png",
        "released": 1995,
        "typed": "Dynamically Typed",
        "build": "Interpreted",
        "performance": "Moderate",
        "difficulty": "Easy",
        "use_cases": [
            "Web Development",
            "Scripting",
            "Automation",
            "Prototyping"
        ],
        "users": "~1 Million"
    },
    {
        "name": "C++",
        "image": "images/about-us/programming-languages/c++.png",
        "released": 1983,
        "typed": "Statically Typed",
        "build": "Compiled",
        "performance": "Very High",
        "difficulty": "High",
        "use_cases": [
            "System Software",
            "Game Development",
            "Real-Time Systems",
            "Embedded Systems"
        ],
        "users": "~5 Million"
    },
    {
        "name": "Swift",
        "image": "images/about-us/programming-languages/swift.png",
        "released": 2014,
        "typed": "Statically Typed",
        "build": "Compiled",
        "performance": "High",
        "difficulty": "Moderate",
        "use_cases": [
            "iOS Development",
            "macOS Applications",
            "Mobile Application Development"
        ],
        "users": "~2 Million"
    },
    {
        "name": "Go",
        "image": "images/about-us/programming-languages/go.png",
        "released": 2009,
        "typed": "Statically Typed",
        "build": "Compiled",
        "performance": "High",
        "difficulty": "Moderate",
        "use_cases": [
            "System Programming",
            "Cloud Computing",
            "Microservices",
            "Web Development"
        ],
        "users": "~3 Million"
    },
    {
        "name": "PHP",
        "image": "images/about-us/programming-languages/php.png",
        "released": 1995,
        "typed": "Dynamically Typed",
        "build": "Interpreted",
        "performance": "Moderate",
        "difficulty": "Easy",
        "use_cases": [
            "Web Development",
            "Server-Side Scripting",
            "Content Management Systems"
        ],
        "users": "~6 Million"
    },
    {
        "name": "Kotlin",
        "image": "images/about-us/programming-languages/kotlin.png",
        "released": 2011,
        "typed": "Statically Typed",
        "build": "Compiled",
        "performance": "High",
        "difficulty": "Moderate",
        "use_cases": [
            "Android Development",
            "Web Development",
            "Backend Development"
        ],
        "users": "~2 Million"
    }
];
/* ------ PROGRAMMING LANGUAGE CARDS START (EOF) ------ */