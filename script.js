const API_URL = "http://localhost:5000/api";
document.querySelectorAll(".cards article,.program-grid div").forEach(card=>{
  card.addEventListener("mousemove",(e)=>{
    const r=card.getBoundingClientRect();
    card.style.transform=`perspective(700px) rotateX(${-(e.clientY-r.top-r.height/2)/18}deg) rotateY(${(e.clientX-r.left-r.width/2)/18}deg) translateY(-8px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});
const form = document.getElementById("bookingForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch(`${API_URL}/bookings`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });
    const out = await res.json();
    msg.textContent = out.message || "Booking submitted successfully.";
    form.reset();
  } catch(err) {
    msg.textContent = "Backend connect nahi hai. Backend start karo: npm run dev";
  }
});