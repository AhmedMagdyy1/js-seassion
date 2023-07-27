var userInput = document.getElementById('userInput')
var homeContent = document.getElementById('homeContent')
var items = []
var searchInput = document.getElementById('searchInput')

if (localStorage.getItem('toDoItems') != null){
    items = JSON.parse(localStorage.getItem('toDoItems'))
    displayItem()
}



function addItem(){
    items.push(userInput.value)
    displayItem()
    localStorage.setItem('toDoItems',JSON.stringify(items))
}

function displayItem(){
    var container = ''
    for( var i = 0; i < items.length ; i++){
        container += `
        <div class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                    <p id="x">${items[i]}</p>
                    <i class=" fa-sharp fa-solid fa-trash" onClick="deleteItems(${i})"></i>
                </div>
        `
    }
    homeContent.innerHTML = container
}

function deleteItems(index){
    items.splice(index,1)
    displayItem()
    localStorage.setItem('toDoItems',JSON.stringify(items))
}

function getSearchItem(searchValue){
    var container = ''
    for( var i = 0; i < items.length ; i++){
        if(items[i].toLowerCase().includes(searchValue.toLowerCase())){
            container += `
            <div class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
                        <p id="x">${items[i]}</p>
                        <i class=" fa-sharp fa-solid fa-trash" onClick="deleteItems(${i})"></i>
                    </div>
            `
        }
        homeContent.innerHTML = container
        }
}

searchInput.addEventListener('input',function(e){
    getSearchItem(e.target.value)
})




// Problem 1 





// function Boom(arr){

//     // Condition ?  True  : False 
//     arr.join('').includes('7') ? console.log("Boom!") : console.log("there is no 7 in the array");
//     console.log(arr.join());
// }

// Boom([8, 6, 33, 100])




// Problem 2

// function checkNum(arr) {
//     var newArr = []
//     for (var i = 0 ; i < arr.length ; i++){
//         for(var k = 0 ; k <arr[i].length ; k++){
//             if(arr[i][k] >= 0 && arr[i][k] <= 9){
//                 newArr.push(arr[i])
//                 console.log(newArr);
//                 break
//             }
//         }
//     }
// }
// checkNum(["1a", "a", "2b", "b"])



// Problem 3

// function sumNums(x){
//     // console.log(arguments[0]+arguments[1]);
//     // return function(y){
//     //     console.log(y);
//     // }
//     if (arguments.length == 2){
//         console.log(arguments[0]+arguments[1]);
//     } else {
//         return function(y){
//             console.log(x+y);
//         }
//     }
// }
// sumNums(2,3)
// sumNums(2)(10)



























