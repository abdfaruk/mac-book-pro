

function updateTotal (){
    
    const bestPrice = 1299;
    const memoryPrice =  parseFloat(document.getElementById('extraMemoryPrice').innerText);
    const storagePrice = parseFloat(document.getElementById('extraStoragePrice').innerText);
    const deliveryPrice = parseFloat(document.getElementById('deliveryPrice').innerText);

    document.getElementById('total-prices').innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    

    
}



// first button (for 8gb memory)
document.getElementById('8gb-memory').addEventListener('click', function(){

    const memoryPrice2 = document.getElementById('extraMemoryPrice');
    const preTotalText2 = memoryPrice2.innerText;
    const preTotal2 = parseFloat(preTotalText2);
    const newTotalMinus = 0;
    memoryPrice2.innerText = newTotalMinus; 
    updateTotal();
    updateTotalWthDis()

});


// second button (for 16gb memory)

document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryPriceTotal = document.getElementById('extraMemoryPrice');
    const preTotalText = memoryPriceTotal.innerText;
    const preTotal = parseFloat(preTotalText);
    const newTotalPlus = 180;
    memoryPriceTotal.innerText = newTotalPlus;
    updateTotal();
    updateTotalWthDis()

});



// 3rd button for 1 tb ssd extra storage.

document.getElementById('1tbssd').addEventListener('click', function(){
    const ssd1tbPriceTotal = document.getElementById('extraStoragePrice');
    const preSsd1tbText = ssd1tbPriceTotal.innerText;
    const preSsd1tbTotal = parseFloat(preSsd1tbText);
    const newSsd1tbTotal = 180;
    ssd1tbPriceTotal.innerText = newSsd1tbTotal;
    updateTotal();
    updateTotalWthDis()

})



// 4th button for 512 mb extra storage.

document.getElementById('512gbssd').addEventListener('click', function(){
    const ssd512mbTotal = document.getElementById('extraStoragePrice');
    const preSsd512Text = ssd512mbTotal.innerText;
    const preSsd5121Totala = parseFloat(preSsd512Text);
    const newSsd512Total = 100;
    ssd512mbTotal.innerText = newSsd512Total;
    updateTotal();
    updateTotalWthDis()
});


// 5th button for 256 gb ssd storage

document.getElementById('256gbssd').addEventListener('click', function(){
    const ssd256mbTotal = document.getElementById('extraStoragePrice');
    const preSsd256Text = ssd256mbTotal.innerText;
    const preSsd2561Totala = parseFloat(preSsd256Text);
    const newSsd256Total = 0;
    ssd256mbTotal.innerText = newSsd256Total;
    updateTotal();
    updateTotalWthDis()
});


// 6th button delivery fast
document.getElementById('deliFast').addEventListener('click', function(){
    const deliFastTotal = document.getElementById('deliveryPrice');
    const preDeliFastText = deliFastTotal.innerText;
    const preDeliFastTotal = parseFloat(preDeliFastText);
    const newDeliFastTotal = 20;
    deliFastTotal.innerText = newDeliFastTotal;
    updateTotal();
    updateTotalWthDis()

});


// 7th button delivery late

document.getElementById('deliLate').addEventListener('click', function(){
    const deliLateTotal = document.getElementById('deliveryPrice');
    const preDeliLateText = deliLateTotal.innerText;
    const preDeliLateTotal = parseFloat(preDeliLateText);
    const newDeliLateTotal = 0;
    deliLateTotal.innerText = newDeliLateTotal;
    updateTotal();
    updateTotalWthDis()
})




// bonus part promo code
function updateTotalWthDis (){
    
    const bestPrice = 1299;
    const memoryPrice =  parseFloat(document.getElementById('extraMemoryPrice').innerText);
    const storagePrice = parseFloat(document.getElementById('extraStoragePrice').innerText);
    const deliveryPrice = parseFloat(document.getElementById('deliveryPrice').innerText);

    document.getElementById('totalPricesWithDic').innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    

    
}


document.getElementById('applyButton').addEventListener('click', function(){
    const codeField = document.getElementById('promoCode');
    const promoCode = codeField.value;
    if(promoCode == 'stivekaku'){
        console.log('done');
    }
})