const endPoint = "http://localhost:3000/api/v1/travel_plans"



document.addEventListener('DOMContentLoaded', () => {
   getTravelPlans()  

   const createTravelPlanForm = document.querySelector("#create-travel-plan-form")

   createTravelPlanForm.addEventListener("submit", (e) => createFormHandler(e))
})



function getTravelPlans() {
    fetch(endPoint)
    .then(response => response.json())
    .then(travel_plans => {
        travel_plans.data.forEach(travel_plan => {
            const travelPlanHTML = 
            `<div data-id=${travel_plan.id}>
                <h1>${travel_plan.attributes.name}</h1>
                <p>${travel_plan.attributes.start_date}</p>
                <p>${travel_plan.attributes.end_date}</p>
                <button data-id=${travel_plan.id}>description</button>

                </div>
                <br></br>`;

                document.querySelector('#travel-plan-container').innerHTML += travelPlanHTML
            
        })
        
    }) 

}

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const startDateInput = document.querySelector('#input-start_date').value
    const endDateInput = document.querySelector('#input-end_date').value
    const destinationInput = document.querySelector('#destinations').value
    const destinationId = parseInt(destinationInput)
    postFetch(nameInput, startDateInput, endDateInput, destinationId)
    
}

function postFetch(name, start_date, end_date, destination_id) {
    console.log(name, start_date, end_date, destination_id)

}
// const travelPlanCreate = document.querySelector("#travel-plan-create")

// travelPlanCreate.addEventListener('submit', function(e){
//     const TRAVEL_PLANS_URL = 'http://localhost:3000/api/v1/travel_plans'
//     e.preventDefault()
//     debugger
//     fetch(TRAVEL_PLANS_URL, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             accept: "application/json"
//         },
//         body: JSON.stringify({
//             travel_plan: {
//                 name: travelPlanInputs[0].value,
//                 start_date: travelPlanInputs[1].value,
//                 end_date: travelPlanInputs[3].value,
//                 destination: travelPlanInputs[4].value,
//                } 
                
            
//         })
//     })
//     const option = document.createElement("option")

// option.text= "Text"

// option.value = "myvalue"

// const select = document.getElementById("selectDestination")

// select.appendChild(option)

// .then(res => res.json())
// .then(function(object){
//     if (object.message) {
//         alert(object.message)
//     }
//     else {
//         travelPlanMade(object)
//     }
// })

// })

// // function travelPlanMade(object){
// //     travelPlans
// // }



// // var select = document.getElementById("selectDestination"); 
// // // var options = ;


// // // const destinations = destinations

// // for(var i = 0; i < options.length; i++) {
// //     var opt = options[i];
// //     var el = document.createElement("option");
// //     el.textContent = opt;
// //     el.value = opt;
// //     select.appendChild(el);
// // }​