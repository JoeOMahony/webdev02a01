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

/* ------ data-manipulation.html BANNER IMAGE ROLLOVER START ------ */
document.addEventListener('DOMContentLoaded', function() {
    const bannerImage = document.getElementById('banner-img-data-manipulation');
    bannerImage.addEventListener('mouseenter', () => bannerImage.src =
        'images/data-manipulation/data-manipulation-2.png');
    bannerImage.addEventListener('mouseleave', () => bannerImage.src =
        'images/data-manipulation/data-manipulation-1.png');
});
/* ------ data-manipulation.html BANNER IMAGE ROLLOVER END ------ */

/* COMPUTER ARRAY OF OBJECTS START (MUST BE DECLARED @ TOP) */
const computers = [
    {
        serialNum: "SN123456",
        manufacturer: "Dell",
        type: "Laptop",
        specification: "Intel Core i7, 16GB RAM, 512GB SSD",
        price: 1299.99
    },
    {
        serialNum: "SN789012",
        manufacturer: "Apple",
        type: "Desktop",
        specification: "M2, 32GB RAM, 2TB SSD",
        price: 2499.99
    },
    {
        serialNum: "SN345678",
        manufacturer: "Lenovo",
        type: "Workstation",
        specification: "AMD Ryzen 9, 64GB RAM, 2TB NVMe SSD",
        price: 1899.99
    },
    {
        serialNum: "SN901234",
        manufacturer: "HP",
        type: "Server",
        specification: "Intel Xeon, 128GB RAM, 4TB HDD",
        price: 3499.99
    },
    {
        serialNum: "SN567890",
        manufacturer: "Samsung",
        type: "Tablet",
        specification: "Snapdragon 8 Gen 2, 12GB RAM, 256GB SSD",
        price: 899.99
    },
    {
        serialNum: "SN112233",
        manufacturer: "Microsoft",
        type: "Laptop",
        specification: "Intel Core i5, 8GB RAM, 256GB SSD",
        price: 999.99
    },
    {
        serialNum: "SN445566",
        manufacturer: "Acer",
        type: "Mini-Computer",
        specification: "Intel Core i3, 4GB RAM, 128GB SSD",
        price: 499.99
    },
    {
        serialNum: "SN778899",
        manufacturer: "Asus",
        type: "Embedded",
        specification: "ARM Cortex-A72, 2GB RAM, 32GB eMMC",
        price: 299.99
    },
    {
        serialNum: "SN101112",
        manufacturer: "LG",
        type: "Wearable",
        specification: "Qualcomm Snapdragon Wear 4100, 1GB RAM, 8GB Storage",
        price: 199.99
    },
    {
        serialNum: "SN131415",
        manufacturer: "Nokia",
        type: "Smartphone",
        specification: "Mediatek Dimensity 9200, 12GB RAM, 512GB Storage",
        price: 1099.99
    },
    {
        serialNum: "SN161718",
        manufacturer: "Apple",
        type: "Watch",
        specification: "Apple S9, 1GB RAM, 64GB Storage",
        price: 499.99
    },
    {
        serialNum: "SN192021",
        manufacturer: "Dell",
        type: "Mainframe",
        specification: "IBM z16, 512GB RAM, 20TB SSD",
        price: 89999.99
    },
    {
        serialNum: "SN222324",
        manufacturer: "HP",
        type: "PDA",
        specification: "Intel XScale, 64MB RAM, 256MB Flash",
        price: 149.99
    },
    {
        serialNum: "SN252627",
        manufacturer: "Lenovo",
        type: "Quantum",
        specification: "64-Qubit Superconducting Quantum Processor",
        price: 299999.99
    }
];
/* COMPUTER ARRAY OF OBJECTS END */

/* ARRAY OF OBJECTS FORM/TABLE START */
let table = document.querySelector("table");
let form = document.querySelector("form");

const displayRecs = () => {
    let tbody = table.querySelector("tbody");
    if (!tbody) {
        table.innerHTML = `<thead>
            <tr>
                <th>Manufacturer</th><th>Type</th><th>Specification</th><th>Price</th><th>Delete</th>
            </tr>
        </thead>
        <tbody></tbody>`;
        tbody = table.querySelector("tbody");
    } else {
        tbody.innerHTML = ""; // Only clear rows, not the entire table
    }

    computers.forEach((computer) => {
        tbody.insertAdjacentHTML(
            "beforeend",
            `<tr>
                <td>${computer.manufacturer}</td>
                <td>${computer.type}</td>
                <td>${computer.specification}</td>
                <td>€${computer.price}</td>
                <td><button data-id="${computer.serialNum}">Delete</button></td>
            </tr>`
        );
    });
};

const addRecord = (evt) => {
    evt.preventDefault();
    let newComputer = {
        serialNum: form.elements.serialNum.value,
        manufacturer: form.elements.manufacturer.value,
        type: form.elements.type.value,
        specification: form.elements.specification.value,
        price: form.elements.price.value
    };

    computers.push(newComputer);

    // Alert, not confirm for add
    alert(`
        You added a new computer to the system!
        
        => Serial Number: ${newComputer.serialNum}
        => Manufacturer: ${newComputer.manufacturer}
        => Type: ${newComputer.type}
        => Specification: ${newComputer.specification}
        => Price: ${newComputer.price}
    `);

    displayRecs();
    form.reset();
    form.elements[0].focus();
};

displayRecs();

form.addEventListener("submit", addRecord);

table.addEventListener("click", (evt) => {
    if (evt.target.matches("button")) {
        let deleteRec = computers.findIndex((computer) => computer.serialNum === evt.target.dataset.id);
        let deleteComputer = computers[deleteRec]; // Since we already have the index, may as well use this
        let deleteConfirm = confirm(`
        Are you sure you want to remove this computer from the system?
        
        => Serial Number: ${deleteComputer.serialNum}
        => Manufacturer: ${deleteComputer.manufacturer}
        => Type: ${deleteComputer.type}
        => Specification: ${deleteComputer.specification}
        => Price: ${deleteComputer.price}
        `);
        if (deleteConfirm) {
            computers.splice(deleteRec, 1);
            displayRecs();
        }
    }
});
/* ARRAY OF OBJECTS FORM/TABLE START */

/* DATE TIME START (FOR LAST UPDATED SPAN UNDER HEADING 2)  */
function setPreviousDateTime() {
    let dateTime = new Date();

    // Setting a hard date here, as this shouldn't be dynamic
    dateTime.setHours(18, 49);
    dateTime.setDate(31);
    dateTime.setMonth(2); // ZERO-BASED INDEX, 2=MARCH
    dateTime.setFullYear(2025);

    const spanText = document.getElementById("com-mgmt-last-update");

    // Clear the content first to avoid doubling
    spanText.innerHTML = '';

    spanText.insertAdjacentHTML("afterbegin", `
      <b>System Last Updated:</b>
      <span id="date-calculation">
        ${dateTime.toLocaleDateString('en-ie', { weekday: 'long' })}
        ${dateTime.getDate()}
        ${dateTime.toLocaleDateString('en-ie', { month: 'long' })}
        ${dateTime.toLocaleDateString('en-ie', { year: 'numeric' })}
        @
        ${dateTime.toLocaleTimeString('en-ie', { hour: '2-digit', minute: '2-digit', hour12: false })}
      </span>
      <button id="reset-system-datetime">Reset</button>
      <button id="update-system-datetime">Update</button>
    `);

    document.getElementById("update-system-datetime").addEventListener("click", setCurrentDateTime);
    document.getElementById("reset-system-datetime").addEventListener("click", setPreviousDateTime);
}

function setCurrentDateTime() {
    let dateTime = new Date();

    const spanText = document.getElementById("com-mgmt-last-update");

    // Clear the content first to avoid doubling
    spanText.innerHTML = '';

    spanText.insertAdjacentHTML("afterbegin", `
      <b>System Last Updated:</b>
      <span id="date-calculation">
        ${dateTime.toLocaleDateString('en-ie', { weekday: 'long' })}
        ${dateTime.getDate()}
        ${dateTime.toLocaleDateString('en-ie', { month: 'long' })}
        ${dateTime.toLocaleDateString('en-ie', { year: 'numeric' })}
        @
        ${dateTime.toLocaleTimeString('en-ie', { hour: '2-digit', minute: '2-digit', hour12: false })}
      </span>
      <button id="reset-system-datetime">Reset</button>
      <button id="update-system-datetime">Update</button>
    `);

    // Attach event listeners again after updating content
    document.getElementById("update-system-datetime").addEventListener("click", setCurrentDateTime);
    document.getElementById("reset-system-datetime").addEventListener("click", setPreviousDateTime);
}

// DEFAULT WILL BE HARD-CODED DATE TIME
setPreviousDateTime();
/* DATE TIME END (FOR LAST UPDATED SPAN UNDER HEADING 2)  */

/* SEARCH FOR A COMPUTER BAR START */
document.getElementById("searchInput").addEventListener("input", () => {
    // TRIGGER is input event, want computer search to be performed on input
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredComputers = computers.filter((computer) => {
        return (
            // LATE MODIFICATION 31/03/25 14:28
            // FORGOT TO ADD THE VALUES FOR THE KEYS I ADDED LATER
            computer.serialNum.toLowerCase().includes(searchTerm) ||
            computer.manufacturer.toLowerCase().includes(searchTerm) ||
            computer.type.toLowerCase().includes(searchTerm) ||
            computer.specification.toLowerCase().includes(searchTerm) ||
            // ONLY RUN THE BELOW IF IT IS(!!) A NUMBER, STOP THE ERROR
            !(isNaN(searchTerm)) && computer.price === parseFloat(searchTerm)
        );
    });

    let tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    if (filteredComputers.length > 0) { // IF NOT Blank
        filteredComputers.forEach((computer) => {
            tbody.insertAdjacentHTML(
                "beforeend",
                `<tr>
                <td>${computer.manufacturer}</td>
                <td>${computer.type}</td>
                <td>${computer.specification}</td>
                <td>€${computer.price}</td>
                <td><button data-id="${computer.serialNum}">Delete</button></td>
            </tr>`
            );
        });
    } else { // IF BLANK
        tbody.insertAdjacentHTML(
            "beforeend",
            `<tr>
                    <td colspan="5" rowspan="5" style="background-color: white; padding: 1em; 
                    text-decoration: double underline; color: #00004d">
                    <b>No Computer Found!</b></td>
                    </tr>
            `);
    }
});
/* SEARCH FOR A COMPUTER BAR END */

/* CLEAR RESULTS START */
document.getElementById("reset-search-button").addEventListener("click", () => {
    let searchTerm = document.getElementById("searchInput").value; // taken from above
    searchTerm = "";
    displayRecs();
})
/* CLEAR RESULTS END */