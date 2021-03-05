function add(elem){
    var item = document.getElementById(elem).childNodes[3].childNodes[1].innerHTML;
    var money = document.getElementById(elem).childNodes[3].childNodes[4].innerHTML;
    var data = document.createElement("div");
    data.innerHTML = '<div class="cart-row"><span class="cart-item cart-header cart-column">'+item+'</span><span class="cart-price cart-header cart-column">'+money+'</span><span class="cart-quantity cart-header cart-column">1</span></div>';
    document.getElementById("cart-items").appendChild(data); 
    var total = document.getElementById('result').innerHTML;
    var stu = total.replace("$", "");
    var res = money.replace("$", "");
    var i;
    for (i = 1; i <= item.length; i++){
        var tot = +stu + +res;
    }
    console.log(tot);
    document.getElementById("result").innerHTML = "$" + tot;
}

function end(){
    alert("Thankyou For Your Purchase");
    
}

function uc(deal){
    var item = document.getElementById(deal).childNodes[3].childNodes[1].innerHTML;
    var money = document.getElementById(deal).childNodes[3].childNodes[6].innerHTML;
    var data = document.createElement("div");
    data.innerHTML = '<div class="cart-row"><span class="cart-item cart-header cart-column">'+item+'</span><span class="cart-price cart-header cart-column">'+money+'</span><span class="cart-quantity cart-header cart-column">1</span></div>';
    document.getElementById("cart-items").appendChild(data);
    var total = document.getElementById('result').innerHTML;
    var stu = total.replace("$", "");
    var res = money.replace("$", "");
    var i;
    for (i = 1; i <= item.length; i++){
        var tot = +stu + +res;
    }
    console.log(tot);
    document.getElementById("result").innerHTML = "$" + tot;
}

