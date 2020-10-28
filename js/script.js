/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//constant for the max number of items per page
const itemsPerPage = 9;

/**
 * showPage function
 * Takes information from and array of objects and displays it to the webpage
 * in sections of no more than nine items
 * @param {*} list a list of all the student data
 * @param {*} page the page number
 */
function showPage(list, page){
   let startIndex =  (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   const ul = document.querySelector('ul.student-list'); //select ul element with class name student-list

   ul.innerHTML = ''; //clears out any previous list information

   //loop through the list paramenter
   for(let i = 0; i < list.length; i++){
      //check for when the i is between the startIndex and endIndex
      if(i >= startIndex && i < endIndex){
         
         let currentStudent = list[i];

         let studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${currentStudent.picture.large}" alt="Profile Picture">
               <h3>${currentStudent.name.first} ${currentStudent.name.last}</h3>
               <span class="email">${currentStudent.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${currentStudent.registered.date}</span>
            </div>
         </li>`; 

         ul.insertAdjacentHTML('beforeend', studentItem); //add the student item to the ul element
         
      }

   }

}



/**
 * Creates the page buttons on the bottom of the page and determines which is the 
 * active page based on the users clicks
 * @param {*} list an array of objects representing the student data
 */
function addPagination(list){
   let numOfPages = Math.ceil(list.length / 9); //Determine how many pages are needed
   
   const ul = document.querySelector('.link-list'); //select UL element with class link-list
   ul.innerHTML = '';


   //loop to create the buttons
   for(let i = 1; i <= numOfPages; i++){
      
      let elements = `<li>
                        <button type="button">${i}</button>
                        </li>`;
      ul.insertAdjacentHTML('beforeend', elements);

   }

   //select first button and give it the class active
   document.getElementsByTagName('button')[0].className = 'active';

   //add event listener to parent of buttons when clicked
   ul.addEventListener('click', (event) => {
      let clickedElement = event.target;

      //determine if a button element was clicked
      if(clickedElement.tagName = 'button'){
         //determine which button element was clicked and convert number to int
         let buttonPressed = parseInt(clickedElement.textContent);
         showPage(list, buttonPressed); //displays the updated page

         //grab element with active class and change it to an empty string
         document.querySelector('.active').className = '';

         //change current page button to have a class of active
         clickedElement.className = 'active';

         //console.log(buttonPressed); tests the if statement and shows which button was pressed
      }
      // console.log(event.target); tests that the event listener is functioning

   });
}


// Call functions
showPage(data, 1);
addPagination(data);