function print() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const person = document.getElementById('people').value;

    if (!start || !end || !start === end) {
        alert("please select the valid option.");
        return;
    }

    localStorage.setItem('start',start );
    localStorage.setItem('end', end);
    localStorage.setItem('people', person);

    window.location.href = "print.html";
}

const priceChart = {
   tiruppur: { kovai: 50, Karumpathampatti: 40, poondi: 10, tiruppur: 0 },
    poondi: { kovai: 40, Karumpathampatti: 30, poondi: 0, tiruppur: 10 },
    Karumpathampatti: { kovai: 30, Karumpathampatti: 0, poondi: 20,tiruppur: 30 },
    kmch: { kovai: 20, Karumpathampatti: 10, poondi: 30,tiruppur: 40 },
    hopes: { kovai: 15, Karumpathampatti: 28, poondi: 30, tiruppur: 40 },
    pelamedu: { kovai: 12, Karumpathampatti: 20, poondi: 30, tiruppur: 50 },
    navaIndia: { kovai: 10, Karumpathampatti1: 20, poondi: 40, tiruppur: 45 },
    annaselai: { kovai: 8, Karumpathampatti: 25, poondi: 45,tiruppur: 50 },
    cbe: { kovai: 0, Karumpathampatti: 25, poondi: 45, tiruppur: 50 },
};

const start = localStorage.getItem('start');
const end = localStorage.getItem('end');
const person = parseInt(localStorage.getItem('people'));

const ticketNo =Math.floor(10000+ Math.random()*900000);
const ticketId= "ID" +Math.floor(Math.random()*999999);
const now=new Date().toLocaleDateString();

const price=priceChart[start]?.[end] || 0;
const total= price*person;

document.getElementById("ticketNo").textContent = ticketNo;
document.getElementById("ticketId").textContent = ticketId;
document.getElementById("time").textContent = now;
document.getElementById("fromPlace").textContent = start?.toUpperCase();
document.getElementById("toPlace").textContent = end?.toUpperCase();
document.getElementById("personCount").textContent = person +" X";
document.getElementById("price").textContent = price.toFixed(2);
document.getElementById("total").textContent = total.toFixed(2);
