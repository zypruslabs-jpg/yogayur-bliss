const API_URL = "http://localhost:5000/api";
function login(){
  const pass=document.getElementById("password").value;
  if(pass==="admin123"){
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    loadBookings();
  } else {
    document.getElementById("loginMsg").textContent="Wrong password";
  }
}
async function loadBookings(){
  const box=document.getElementById("bookings");
  box.innerHTML="Loading...";
  try{
    const res=await fetch(`${API_URL}/bookings`);
    const data=await res.json();
    if(!data.length){box.innerHTML="<p>No bookings yet.</p>"; return;}
    box.innerHTML=data.map(b=>`<div class="card"><h3>${b.name}</h3><p><b>Phone:</b> ${b.phone}</p><p><b>Service:</b> ${b.service}</p><p><b>Date:</b> ${b.date}</p><p><b>Message:</b> ${b.message||"-"}</p><p><b>Created:</b> ${new Date(b.createdAt).toLocaleString()}</p></div>`).join("");
  }catch(e){box.innerHTML="Backend start nahi hai. backend folder me npm run dev karo."}
}