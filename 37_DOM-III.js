console.log("DOM 3");
// const pTag = document.getElementById("pTag");

/* inner text just shows the output which is visible on the screen 
    here the only hello will be consoled/ displayed*/
//console.log("text of innerText :- ", pTag.innerText);

/* it will console the whole element text */
//console.log("text of textContent : ",pTag.textContent);

/* it will show text with html */
//console.log("element with html inside:- ", pTag.innerHTML);

/*creating elements using DOM */
/*
    const div1 = document.createElement("div");
    div1.innerText = "HEYYYYY";
    document.body.appendChild(div1);

    const heading = document.createElement("h1");
    heading.innerText = "Hello World";
    document.body.appendChild(heading);

    const heading2 = document.createElement("h2");
    heading2.innerText = "Bye World";
    document.body.appendChild(heading2) 
*/

/* APPEND MEANS ADDING THE ELEMENT IN LAST EVEN IF THEY ARE COMMENT */

// APPEND CHILD IN DIV
/*
    const heading1 = document.createElement("h1");
    heading1.innerText = "Hello World";
    document.getElementById("list").appendChild(heading1);
*/
var count = 0;

function appendElements() {
  //     const pTag = document.createElement("p");
  //     pTag.innerText = count;
  //     count++;
  //     /* setting the attributes while appending */
  //    pTag.setAttribute("id" , `id-${count}`);
  //    pTag.setAttribute("type" , "para");
  //    pTag.setAttribute("class" , "myClass");
  //    /* setting css while appending*/
  //    pTag.style.color ="white";
  //    pTag.style.backgroundColor ="black";
  //    pTag.style.textAlign ="center";
  //    pTag.style.padding= "20px"
  //     document.getElementById("list").appendChild(pTag);

  /* adding classes in dom */
  const pTag = document.createElement("p");
  pTag.innerText = count;
  count++;
  pTag.setAttribute("class", "myClass"); // for single class
  pTag.setAttribute("class", "myClass class2 class3"); // for multiple class
  /* we can add class using inner html also */
  pTag.classList.add("123"); // add class to last
  pTag.classList.remove("123"); // remove specified class
  pTag.classList.toggle("123"); // toggles (if class present then it adds or it removes the class)
  document.getElementById("list").appendChild(pTag);
}
