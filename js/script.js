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


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
/**
 * 
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

         ul.insertAdjacentHTML('beforeend', studentItem);
         
      }

   }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   let numOfPages = Math.ceil(list.length / 9); //Determine how many pages are needed
   
   const ul = document.querySelector('.link-list'); //select UL element with class link-list
   ul.innerHTML = '';


   //loop to create the buttons
   for(let i = 1; i <= numOfPages; i++){
      

   }

}


// Call functions
addPagination(data);
showPage(data, 2);