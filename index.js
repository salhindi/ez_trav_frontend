const endPoint = "http://localhost:3000/api/v1/travel_plans"

document.addEventListener('DOMContentLoaded', () => {
   getTravelPlans()  
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
            
        });
        
    }) 
}