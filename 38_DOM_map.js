console.log("mapping elements");

const list = document.getElementById("list");
var arr = [1, "Govind", 3, "Ram", 5, "OM", 7, 8];
for (let i = 0; i < arr.length; i++) {
  list.innerHTML += `
    <li> ${arr[i]} </li>
    `;
}
function filterElements() {
  console.log("searching.......");
  const searchVal = document.querySelector("#search").value.toLowerCase();
  var filteredElements = arr.filter((item) =>
    item.toLowerCase().includes(searchVal)
  );
  console.log(filteredEl);
  console.log(searchVal);
}
