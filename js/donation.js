// For Noakhali
document.getElementById('btn-donate-noakhali')
.addEventListener('click', function(event){
    event.preventDefault();

const donateMoney = getInputFieldValueById('input-donate-noakhali');

if(donateMoney > 0){
    const donation = gettextFieldValueById('main-balance');
    const noakhaliTotalBalance = gettextFieldValueById('total-noakhali-balance');
    console.log(donation, donateMoney, noakhaliTotalBalance);
    const newBalance = donation - donateMoney;
    const newNoakhaliBalance = noakhaliTotalBalance + donateMoney;

    document.getElementById('main-balance').innerText = newBalance;
    document.getElementById('total-noakhali-balance').innerText = newNoakhaliBalance;
}
else {
    alert('Faild to donate money'); 
}
})


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
    alert('Faild to donate money'); 
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
    alert('Faild to donate money'); 
}
})