document.getElementById('btn-history')
.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('History clicked');


document.getElementById('cardSection').classList.add('hidden');
document.getElementById('history-section').classList.remove('hidden');

const historyItem = document.createElement("div");
historyItem.className = 'bg-white p-3 rounded-lg border-2 border-gray-500 p-10 ';

historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-black">${inputDonateNoakhali} Donate for Flood at Noakhali, Bangladesh</h3>
    <p>Date: ${new Date().toString()}</p>
`;

const historyContainer = document.getElementById("history-list");
historyContainer.insertBefore(historyItem, historyContainer.firstChild);


});