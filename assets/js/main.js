/* main/globals  */

var searchBox = document.querySelectorAll(".searchBox")
var arraySearchBox = Array.from(searchBox)
arraySearchBox.map((box) => {
  console.log(box)
  box.addEventListener("click", (event) => { event.stopPropagation() })


  
  // THIS EVENT IS DETECTED BUT NOT USEFUL
    // box.addEventListener("mouseout", (event) => { console.log("mouseout"); event.stopPropagation() })
    // box.children[0].addEventListener("mouseout", (event) => { console.log("mouseout"); event.stopPropagation() })
    // box.addEventListener("mouseup", (event) => { event.stopPropagation() })
    // box.children[0].addEventListener("mouseup", (event) => { event.stopPropagation() })


    //---------------------------------

    
  //this event not detectable
  // box.addEventListener("drag", (event) => { console.log("drag"); event.stopPropagation() })
  // box.addEventListener("dragleave", (event) => { console.log("dragleave"); event.stopPropagation() })
  // box.addEventListener("drop", (event) => { console.log("drop"); event.stopPropagation() })
  // box.addEventListener("dragover", (event) => { console.log("dragover"); event.stopPropagation() })
  // box.addEventListener("ondrop", (event) => { console.log("dragover"); event.stopPropagation() })
  // box.children[0].addEventListener("drag", (event) => { console.log("drag"); event.stopPropagation() })
  // box.children[0].addEventListener("dragleave", (event) => { console.log("dragleave"); event.stopPropagation() })
  // box.children[0].addEventListener("drop", (event) => { console.log("drop"); event.stopPropagation() })
  // box.children[0].addEventListener("dragover", (event) => { console.log("dragover"); event.stopPropagation() })
})