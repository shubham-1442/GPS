const button = document.getElementById("GetLocation")
function gotLocation(position){
  console.log(position)
}
function failedloc(){
  console.log("There was issue")
}
button.addEventListener("click", async()=>{
  navigator.geolocation.getCurrentPosition(gotLocation,failedloc)
  
});