// const seats = document.getElementsByClassName("seat");

// const selectedSeat = [];

// for (let i = 0; i < seats.length; i++) {
//     const seat = seats[i];
//     seat.style.cursor = "pointer";

//     seat.addEventListener("click", () => {
//         if (selectedSeat.length < 4) {
//             seat.style.backgroundColor = "#1DD100";
//             seat.style.color = "#ffffff";
//             selectedSeat.push(seat);
//             const seatsLeft = 40 - selectedSeat.length;
//             const totalPrice = 550 * selectedSeat.length;

//             document.getElementById("seats-left").innerText = seatsLeft;
//             document.getElementById("booked-seat").innerText =
//                 selectedSeat.length;
//             document.getElementById("total-price").innerText = totalPrice;
//             document.getElementById("grand-total").innerText = totalPrice;
//             const seatInfo = document.getElementById("seat-info");
//             const div = document.createElement("div");
//             div.className =
//                 "flex justify-between items-center py-3 px-2 border-b-2 border-dashed";
//             div.innerHTML = `
//             <p>${seat.innerText}</p>
//             <p>Economy</p>
//             <p>550</p>
//             `;
//             seatInfo.appendChild(div);
//         }
//     });
// }

// document.getElementById("apply-coupon").addEventListener("click", () => {
//     const inputField = document.getElementById("input-field");
//     if (inputField.value === "NEW15") {
//         const totalPrice = 550 * selectedSeat.length;
//         const discount = (15 * totalPrice) / 100;
//         const grandTotal = totalPrice - discount;
//         document.getElementById("grand-total").innerText = grandTotal;
//         document.getElementById("discount").innerText = discount;
//     }
//     else if ( selectedSeat.length === 4 && inputField.value === "Couple20") {
//         const totalPrice = 550 * selectedSeat.length;
//         const discount = (20 * totalPrice) / 100;
//         const grandTotal = totalPrice - discount;
//         document.getElementById("grand-total").innerText = grandTotal;
//         document.getElementById("discount").innerText = discount;
//     }
// });

// document.getElementById("scrollButton").addEventListener("click", () => {
//     const ticketingSection = document.getElementById("ticketing-section");
//     ticketingSection.scrollIntoView({ behavior: "smooth" });
// });

// document.getElementById("myForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("form submited");
// });

const seats = document.getElementsByClassName("seat");
const selectedSeat = [];
console.log(selectedSeat);

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.style.cursor = "pointer";
    seat.addEventListener("click", () => {
        if (selectedSeat.includes(seat)) {
            alert("Already Selected");
        } else {
            if (selectedSeat.length < 4) {
                seat.style.backgroundColor = "#1DD100";
                seat.style.color = "#ffffff";
                selectedSeat.push(seat);

                const seatsLeft = 40 - selectedSeat.length;
                document.getElementById("seats-left").innerText = seatsLeft;

                const totalPrice = 550 * selectedSeat.length;
                document.getElementById("total-price").innerText = totalPrice;

                document.getElementById("booked-seat").innerText =
                    selectedSeat.length;

                document.getElementById("grand-total").innerText = totalPrice;

                const seatInfo = document.getElementById("seat-info");
                const div = document.createElement("div");
                div.className =
                    "flex justify-between items-center py-3 px-2 border-b-2 border-dashed";
                div.innerHTML = `
                <p>${seat.innerText}</p>
                <p>Economy</p>
                <p>550</p>
                `;
                seatInfo.appendChild(div);

                // console.log(selectedSeat.length);
                // const phoneNumber = document.getElementById("phone").value;
                // if (selectedSeat.length > 0 && phoneNumber.trim() !== "") {
                //     document.getElementById("btn-next").disabled = false;
                // }

                if (selectedSeat.length === 4) {
                    document.getElementById("input-field").disabled = false;
                    document.getElementById("apply-coupon").disabled = false;
                }
            } else {
                alert("You can't select more then 4 ticket");
            }
        }
    });
}

document.getElementById("apply-coupon").addEventListener("click", () => {
    const inputField = document.getElementById("input-field");
    if (inputField.value === "NEW15") {
        const totalPrice = 550 * selectedSeat.length;
        const discount = (15 * totalPrice) / 100;
        const grandTotal = totalPrice - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("discount-amount").innerText = discount;
        document.getElementById("myCoupon").style.display = "none";
        document.getElementById("discount").style.display = "block";
    } else if (inputField.value === "Couple20") {
        const totalPrice = 550 * selectedSeat.length;
        const discount = (20 * totalPrice) / 100;
        const grandTotal = totalPrice - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("discount-amount").innerText = discount;
        document.getElementById("myCoupon").style.display = "none";
        document.getElementById("discount").style.display = "block";
    } else {
        alert("Please enter right coupon code");
    }
});

document.getElementById("phone").addEventListener("blur", () => {
    const phoneNumber = document.getElementById("phone").value;
    if (selectedSeat.length > 0 && phoneNumber.trim() !== "") {
        document.getElementById("btn-next").disabled = false;
    }
}) /
    document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();
        // alert("form submited");
        document.getElementById("popup").style.display = "block";
        document.getElementById("popup").style.display = "block";
    });

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    location.reload();
    window.scrollTo(0, 0);
});

document.getElementById("scrollButton").addEventListener("click", () => {
    const ticketingSection = document.getElementById("ticketing-section");
    ticketingSection.scrollIntoView({ behavior: "smooth" });
});
