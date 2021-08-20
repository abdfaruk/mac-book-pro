

// first button (for 8gb memory)
document.getElementById('8gb-memory').addEventListener('click', function(){
    const memoryPrice2 = document.getElementById('extra-memory');
    const preTotalText2 = memoryPrice2.innerText;
    const preTotal2 = parseFloat(preTotalText2);
    const newTotalMinus = 0;
    memoryPrice2.innerText = newTotalMinus; 


    const totalNewBalance = document.getElementById('total-prices');
    const preBalanceTotalText2 = totalNewBalance.innerText;
    const preBalanceTotal2 = parseFloat(preBalanceTotalText2);
    const newBalance2 = preBalanceTotal2 - 180;
    totalNewBalance.innerText = newBalance2;
});


// second button (for 16gb memory)

document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryPriceTotal = document.getElementById('extra-memory');
    const preTotalText = memoryPriceTotal.innerText;
    const preTotal = parseFloat(preTotalText);
    const newTotalPlus = 180;
    memoryPriceTotal.innerText = newTotalPlus;




    const totalBalance = document.getElementById('total-prices');
    const preBalanceTotalText = totalBalance.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalText);
    const newBalanceTotal = preBalanceTotal + newTotalPlus;
    totalBalance.innerText = newBalanceTotal;
});






/* // second button (for 16gb memory)

document.getElementById('16gb-memory').addEventListener('click', function(){
    const memoryPriceTotal = document.getElementById('extra-memory');
    const preTotalText = memoryPriceTotal.innerText;
    const preTotal = parseFloat(preTotalText);
    const newTotalPlus = 180;
    memoryPriceTotal.innerText = newTotalPlus;




    const totalBalance = document.getElementById('total-prices');
    const preBalanceTotalText = totalBalance.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalText);
    const newBalanceTotal = preBalanceTotal + newTotalPlus;
    totalBalance.innerText = newBalanceTotal;
});
 */




// button for 16 gb extra memory

document.getElementById('1tbssd').addEventListener('click', function(){
    const ssd1tbPriceTotal = document.getElementById('extra-storage');
    const preSsd1tbText = ssd1tbPriceTotal.innerText;
    const preSsd1tbTotal = parseFloat(preSsd1tbText);
    const newSsd1tbTotal = 180;
    ssd1tbPriceTotal.innerText = newSsd1tbTotal;


    const totalBalance1tb = document.getElementById('total-prices');
    const preBalance1tbText = totalBalance1tb.innerText;
    const preBalanceTotal1tb = parseFloat(preBalance1tbText);
    const newBalance1tb = preBalanceTotal1tb + newSsd1tbTotal;
    totalBalance1tb.innerText = newBalance1tb;
})
