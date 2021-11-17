// Calculate kilometer to meter;

function kilometerToMeter(km) {
    if (km > 0) {
        var meter = km * 1000;
        return meter;
    }
    else {
        return "Please check you input ! input(K.M.) can not be negative."
    }
}

var dadiKm = kilometerToMeter(4);
var naniKm = kilometerToMeter(5.99);
var myKm = kilometerToMeter(-3)
console.log("Dadi total meter : ", dadiKm);
console.log("My total meter : ", myKm);
console.log("nani total meter : ", naniKm);

// Budget Cost Calculation

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

var materials = budgetCalculator(15, 10, 10)
console.log("Your Have to pay for Watch, mobile and laptop total : ",materials);

// Calculate to hotel cost

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 0) {
        totalCost = "Are You Jock To Me, ha ha ha..."
    }
    else if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = (day - 10) * 80;
        totalCost = firstPart + remaining;
    }
    else {
        var secondPart = 1800;
        var lastPart = (day - 20) * 50;
        totalCost = secondPart + lastPart;
    }
    return totalCost;
}

var remonDays = hotelCost(5);
var shaikatDays = hotelCost(13);
var hariDays = hotelCost(24);
var jewelDays = hotelCost(-3)
console.log("Rimon's total cost for stay this hotel will be : ", remonDays)
console.log("shaikat's total cost for stay this hotel will be : ", shaikatDays);
console.log("Hari's total cost for stay this hotel will be : ", hariDays);
console.log("Jewel's total cost for stay this hotel will be : ", jewelDays);

// Find out the largest latter name

function megaFriend(name) {
    var large = 0;
    var largestName;
    for (var i = 0; i < name.length; i++) {
        var element = name[i]; 
        if (element.length > large) {
            large = element.length;
            largestName = element;
        }
    }
    return largestName;
}

var frndName = ["Rakib", "Sumon", "Mim", "Joyty", "Protap", "Satinath", "Yeamin"];
var result = megaFriend(frndName);
console.log("Mega Friend Name : ", result);
