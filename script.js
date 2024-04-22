const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all the prices from the table
    const prices = document.querySelectorAll('.price');
    
    let totalPrice = 0;
    
    // Iterate through each price and sum them up
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });

    // Create a new row for the total price
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1); // Insert row at the end
    const totalCell = newRow.insertCell(0);
    totalCell.textContent = `Total Price: ₹${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);
