const itemForm = document.querySelector('#itemForm');
const itemTable = document.querySelector('#itemTable').getElementsByTagName('tbody')[0];

itemForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const itemName = document.querySelector('#itemName').value;
    const itemDescription = document.querySelector('#itemDescription').value;

    const newRow = itemTable.insertRow();
    newRow.insertCell(0).textContent = itemName;
    newRow.insertCell(1).textContent = itemDescription;

    const deleteCell = newRow.insertCell(2);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        itemTable.deleteRow(newRow.rowIndex - 1);
    });
    deleteCell.appendChild(deleteButton);

    itemForm.reset();
});

function sortTable(columnIndex) {
    const rows = Array.from(itemTable.rows);
    const sortedRows = rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.toLowerCase();
        const cellB = b.cells[columnIndex].textContent.toLowerCase();
        return cellA.localeCompare(cellB);
    });

    while (itemTable.firstChild) {
        itemTable.removeChild(itemTable.firstChild);
    }

    sortedRows.forEach(row => itemTable.appendChild(row));
}