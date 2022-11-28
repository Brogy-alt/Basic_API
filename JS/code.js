// fetch('../Data/data.json')
// .then((res)=>{
//     return res.json();
// })

// .then(data =>{
//     console.log(data.results);
// })

// // Return a person's record if thier ID equals 1.
// .then((data)=> {
//     let results = data.results;
//     let record = results.filter((item)=>{
//         return item.id == 1
//     })
//     console.table(record)

// })

// let data = [ 9, 12, "Thando", 26, 8, 1];
// // push adds last in the list
// data.push(20)
// // removes first element
// data.shift()
// // removes the last element
// data.pop()
// // unshift adds first in the array
// data.unshift("Brogan")
// // filter displays what you select should be displayed
// console.log(data.filter(Number))

// displays the data type
// for(let d of data){
//     if(typeof d != "string")
//     console.log(d);
// }

// let onlyNumbers =[];
// for(let d of data) {
//     if(typeof d != "string")
//     onlyNumbers.push(d)
//     console.log(onlyNumbers);
// }
// console.log(data);
// let onlyNumbers = data.filter(Number);
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a,b)=>{
//     if(a < b)
//     return -1;
//     return 1
// });
// console.log(sortedValues);
// // slices out elements thats targeted
// console.log(data.slice(2, 3));

// let first = data.slice(0,2);
// let second = data.slice(3);
// let finalResult = [...first, ...second];
// console.log(finalResult);

// // splice (start, removeCount, item1, item2...)
// // adds element or elements
// console.log(data);
// data.splice(0, 0, "Brogan");
// console.log(data);

// splice (start, removeCount, item1, item2...)
// this removes Thando
// console.log(data);
// data.splice(2, 2,);
// console.log(data);

// row
let wrapper = document.querySelector(".wrapper");

// the same as fetch but less coding
async function fetchData() {
  let res = await fetch("https://randomuser.me/api?results=7");
  let data = await res.json();
  return data.results;
}
(async function display() {
  let data = await fetchData();
  data.forEach((item) => {
    console.log(item);
    wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="${item}">
        <div class="card-body">
          <h5 class="card-title">${item.name.first}${item.name.last}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
  });
})();
