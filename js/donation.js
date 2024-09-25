// For Noakhali
document.getElementById('btn-donate-noakhali')
.addEventListener('click', function(event){
    event.preventDefault();

const donateMoney = getInputFieldValueById('input-donate-noakhali');

if(donateMoney > 0 ){
    const donation = gettextFieldValueById('main-balance');
    const noakhaliTotalBalance = gettextFieldValueById('total-noakhali-balance');
    console.log(donation, donateMoney, noakhaliTotalBalance);
    const newBalance = donation - donateMoney;
    const newNoakhaliBalance = noakhaliTotalBalance + donateMoney;

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('total-noakhali-balance').innerText = newNoakhaliBalance;
}
else {
    alert('Faild to donate money..please try again'); 
}

 // history

 const historyItem = document.createElement("div");
 historyItem.className = 'bg-white p-3 rounded-lg border-2 border-gray-500 p-10 ';

 historyItem.innerHTML = `
     <h3 class="text-xl font-bold text-black">${inputDonateNoakhali} Donate for Flood at Noakhali, Bangladesh</h3>
     <p>Date: ${new Date().toString()}</p>
 `;

 const historyContainer = document.getElementById("history-list");
 historyContainer.insertBefore(historyItem, historyContainer.firstChild);



 // !Modal
 document.getElementById("congratulation-modal").style.display = "flex";
 document.getElementById("modal-custom-text").innerText = "Noakhali Flood"

});


// for Feni
document.getElementById('btn-donate-feni')
.addEventListener('click', function(event){
    event.preventDefault();

const donateMoney = getInputFieldValueById('input-donate-feni');

if(donateMoney > 0){
    const donation = gettextFieldValueById('main-balance');
    const feniTotalBalance = gettextFieldValueById('total-feni-balance');
    console.log(donation, donateMoney, feniTotalBalance);
    const newBalance = donation - donateMoney;
    const newfeniBalance = feniTotalBalance + donateMoney;

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('total-feni-balance').innerText = newfeniBalance;
}
else {
    alert('Faild to donate money..please try again'); 
}
})

// For Quota
document.getElementById('btn-donate-quota')
.addEventListener('click', function(event){
    event.preventDefault();

const donateMoney = getInputFieldValueById('input-donate-quota');

if(donateMoney > 0){
    const donation = gettextFieldValueById('main-balance');
    const quotaTotalBalance = gettextFieldValueById('total-quota-balance');
    console.log(donation, donateMoney, quotaTotalBalance);
    const newBalance = donation - donateMoney;
    const newquotaBalance = quotaTotalBalance + donateMoney;

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('total-quota-balance').innerText = newquotaBalance;
}
else {
    alert('Faild to donate money..please try again'); 
}
})