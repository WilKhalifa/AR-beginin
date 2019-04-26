var m = document.getElementById("marker")
m.addEventListener("markerFound", (e)=>{
   console.log("found")
})

m.addEventListener("markerLost", (e)=>{
   console.log("lost")
})
