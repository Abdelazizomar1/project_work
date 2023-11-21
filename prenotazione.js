/*
let totalCost = 0;

// Funzione per la prenotazione
function makeReservation() {
    const productSelect = document.getElementById('productCode');
    const productCode = productSelect.value;
    const productName = productSelect.options[productSelect.selectedIndex].text;
    const quantity = document.getElementById('quantity').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const selectedMarket = document.getElementById('marketSelect').value;
    const productPrice = getProductPrice(productCode);

    // Calcola il costo totale
    const reservationCost = quantity * productPrice;
    totalCost += reservationCost;

    // Simulazione di generazione del codice alfanumerico
    const reservationCode = generateReservationCode();

    // Simulazione di salvataggio dei dati prenotazione in un file JSON
    const reservationData = {
        productName: productName,
        quantity: quantity,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        market: selectedMarket,
        reservationCode: reservationCode,
        cost: reservationCost.toFixed(2)
    };
    saveDataToJson('reservations.json', reservationData);

    // Aggiungi la prenotazione all'elenco
    displayReservation(reservationData);

    // Aggiorna il costo totale visualizzato
    updateTotalCost();
}
        // Funzione per ottenere il prezzo del prodotto selezionato
        function getProductPrice(productCode) {
            switch (productCode) {
                case 'carne':
                    return 5.00;
                case 'latte':
                    return 2.00;
                case 'pasta':
                    return 1.50;
                // Aggiungi altri casi secondo necessità
                default:
                    return 0.00;
            }
        }

        // Funzione per la generazione del codice alfanumerico
        function generateReservationCode() {
            return Math.random().toString(36).substring(2, 8).toUpperCase();
        }

        // Funzione per visualizzare la prenotazione nell'elenco
        function displayReservation(reservation) {
            const reservationList = document.getElementById('reservationList');
            const listItem = document.createElement('li');
            listItem.textContent = `Codice Prenotazione: ${reservation.reservationCode}, Prodotto: ${reservation.productName}, Quantità: ${reservation.quantity}, Orario Ritiro: ${reservation.pickupTime}, Costo: €${reservation.cost}`;
            reservationList.appendChild(listItem);
        }

        // Funzione per aggiornare il costo totale visualizzato
        function updateTotalCost() {
            const totalCostElement = document.getElementById('totalCost');
            totalCostElement.textContent = `Totale: €${totalCost.toFixed(2)}`;
        }

        // Funzione per il salvataggio dei dati in un file JSON
        function saveDataToJson(fileName, data) {
            // Simulazione del salvataggio in un file JSON
            const jsonData = JSON.stringify(data);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        } */




        let totalCost = 0;

        // Function to make a reservation
        function makeReservation() {
            const productSelect = document.getElementById('productCode');
            const productCode = productSelect.value;
            const productName = productSelect.options[productSelect.selectedIndex].text;
            const quantity = document.getElementById('quantity').value;
            const pickupDate = document.getElementById('pickupDate').value;
            const pickupTime = document.getElementById('pickupTime').value;
            const selectedMarket = document.getElementById('marketSelect').value;
            const productPrice = getProductPrice(productCode);
        
            // Calculate the total cost
            const reservationCost = quantity * productPrice;
            totalCost += reservationCost;
        
            // Generate a reservation code
            const reservationCode = generateReservationCode();
        
            // Save reservation data to local storage
            saveReservationToLocal({
                productName: productName,
                quantity: quantity,
                pickupDate: pickupDate,
                pickupTime: pickupTime,
                market: selectedMarket,
                reservationCode: reservationCode,
                cost: reservationCost.toFixed(2)
            });
        
            // Add the reservation to the list
            displayReservation({
                reservationCode: reservationCode,
                productName: productName,
                quantity: quantity,
                pickupTime: pickupTime,
                cost: reservationCost.toFixed(2)
            });
        
            // Update the displayed total cost
            updateTotalCost();
        }
        
        // Function to get the price of the selected product
        function getProductPrice(productCode) {
            switch (productCode) {
                case 'carne':
                    return 5.00;
                case 'latte':
                    return 2.00;
                case 'pasta':
                    return 1.50;
                // Add other cases as needed
                default:
                    return 0.00;
            }
        }
        
        // Function to generate an alphanumeric reservation code
        function generateReservationCode() {
            return Math.random().toString(36).substring(2, 8).toUpperCase();
        }
        
        // // Function to display a reservation in the list
        // function displayReservation(reservation) {
        //     const reservationList = document.getElementById('reservationList');
        //     const listItem = document.createElement('li');
        //     listItem.textContent = `Codice Prenotazione: ${reservation.reservationCode}, Prodotto: ${reservation.productName}, Quantità: ${reservation.quantity}, Orario Ritiro: ${reservation.pickupTime}, Costo: €${reservation.cost}`;
        //     reservationList.appendChild(listItem);
        // }
        
        // // Function to update the displayed total cost
        // function updateTotalCost() {
        //     const totalCostElement = document.getElementById('totalCost');
        //     totalCostElement.textContent = `Totale: €${totalCost.toFixed(2)}`;
        // }



// Function to display a reservation in the table
function displayReservation(reservation) {
    const reservationTable = document.getElementById('reservationList');
    const newRow = reservationTable.insertRow();
    
    const cell1 = newRow.insertCell(0);
    cell1.textContent = reservation.reservationCode;

    const cell2 = newRow.insertCell(1);
    cell2.textContent = reservation.productName;

    const cell3 = newRow.insertCell(2);
    cell3.textContent = reservation.quantity;

    const cell4 = newRow.insertCell(3);
    cell4.textContent = reservation.pickupTime;

    const cell5 = newRow.insertCell(4);
    cell5.textContent = `€${reservation.cost}`;

    // Update the displayed total cost
    updateTotalCost();
}

// Function to update the displayed total cost
function updateTotalCost() {
    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `Totale: €${totalCost.toFixed(2)}`;
}















        
        // Function to save reservation data to local storage
        function saveReservationToLocal(reservationData) {
            let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
            reservations.push(reservationData);
            localStorage.setItem('reservations', JSON.stringify(reservations));
        }
        
        // Function to download reservation data
        function downloadReservations() {
            const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
            saveDataToJson('reservations.json', reservations);
        }
        
        // Function to save data to a JSON file
        function saveDataToJson(fileName, data) {
            const jsonData = JSON.stringify(data);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        }
        