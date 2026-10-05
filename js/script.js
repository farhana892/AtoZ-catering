

// connecting JavaScript to Guest Slider

let guestSlider = document.getElementById("guests");
let guestNumber = document.getElementById("guestNumber");


// Making the slider respond when it moves

guestSlider.oninput = function() {

    // This will show value when it slides

     guestNumber.innerHTML = guestSlider.value;

    // Find the position of the slider
    let percentage = (guestSlider.value - guestSlider.min) /
                     (guestSlider.max - guestSlider.min);

    guestNumber.style.left = (percentage * guestSlider.offsetWidth) + "px";
 

};   

// Quotation calculation

let eventForm = document.getElementById("eventForm");
let quotationResult = document.getElementById("quotationResult");

function calculateQuotation(guests) {
  
     let cateringPrice= guests * 18;
     let eventPlanningPrice = 1000;
     let decorationPrice = 500; 
     
     
    let total = 0;

if (document.querySelector('input[value="catering"]').checked) {
    total = total + cateringPrice;
}

if (document.querySelector('input[value="eventPlanning"]').checked) {
    total = total + eventPlanningPrice;
}

if (document.querySelector('input[value="decoration"]').checked) {
    total = total + decorationPrice;
}


     return total;



}




eventForm.onsubmit = function(event) {


    event.preventDefault();

    let guests = guestSlider.value;

    let total = calculateQuotation(guests);


quotationResult.innerHTML =
    "<h2>Request Confirmed!</h2>" +
    "<p>Number of Guests: " + guests + "</p>" +
    "<p>Estimated Quotation: S$" + total + "</p>" +
    "<p>This is a rough estimate. The final quotation may vary depending on your requirements.</p>";


    };
