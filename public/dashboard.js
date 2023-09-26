document.addEventListener("DOMContentLoaded", function () {
    const clientList = document.getElementById("clientList");
    const paginationContainer = document.getElementById("pagination");
    const clientsPerPage = 6; // Number of clients to display per page
    let currentPage = 1; // Current page

    // Function to display clients for a specific page
    function displayClients(clients) {
        clientList.innerHTML = ""; // Clear the current list

        const startIndex = (currentPage - 1) * clientsPerPage;
        const endIndex = startIndex + clientsPerPage;

        for (let i = startIndex; i < endIndex && i < clients.length; i++) {
            const client = clients[i];
            const listItem = document.createElement("li");
            const detailsList = document.createElement("ul");

            const fieldsToDisplay = ['name', 'email', 'phnumber', 'message'];

            fieldsToDisplay.forEach(field => {
                const detailItem = document.createElement("li");
                detailItem.textContent = `${field}: ${client[field]}`;
                detailsList.appendChild(detailItem);
            });

            const orderNumberItem = document.createElement("li");
            orderNumberItem.textContent = `Order Number: ${i + 1}`;
            detailsList.appendChild(orderNumberItem);

            listItem.appendChild(detailsList);
            clientList.appendChild(listItem);
        }
    }

    // Fetch client data from the /getallclients route
    fetch('/getallclients')
        .then(response => response.json())
        .then(clients => {
            // Calculate the total number of pages
            const totalPages = Math.ceil(clients.length / clientsPerPage);

            // Generate pagination buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement("button");
                pageButton.textContent = i;
                pageButton.addEventListener("click", () => {
                    currentPage = i;
                    displayClients(clients);
                });
                paginationContainer.appendChild(pageButton);
            }

            // Display the first page of clients
            displayClients(clients);
        })
        .catch(error => {
            console.error('Error fetching client data:', error);
        });
});
