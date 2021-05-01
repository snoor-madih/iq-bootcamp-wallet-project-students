// make the popup form appear :)
const wallatName=document.getElementById("wallat-name");
wallatName.addEventListener("click",function openForm() {
    document.getElementById("popup-form").style.display = "block";})
// make the close button close the form :)
const clos=document.getElementById("close")
clos.addEventListener("click",function closeForm() {
    document.getElementById("popup-form").style.display = "none";})
// make the X button close the form :)
const x=document.getElementById("x")
x.addEventListener("click",function closeF() {
     document.getElementById("popup-form").style.display = "none";})

// its not working for some reason it suppose to pass the name in the popup  to the wallet name button and change the balance
const NewWallet=document.getElementById("create")
NewWallet.addEventListener("click",function changeLabel() {
    const lb5=document.getElementById("label5");
    const balanc=document.getElementById("balance");
    lb5.innerHTML=balanc.value;
    // chance the button name and create and litem in the list with that name
    const name=document.getElementById("name");
    const wallatName=document.getElementById("wallat-name");
    wallatName.innerHTML=name.value;
//--------------------------------------------------------------------------------------
    const ul=document.getElementById("dropdown-menu");
    document.body.appendChild(ul);
    for (let i=0; i<1; i++){
        const name1=document.getElementById("name");
        const li=document.createElement('li');
        li.innerHTML= name1.value;
        ul.append(li);
    }
    document.getElementById("drop").append(ul);

//JQUERY 

// $('input[type=radio]').change(function()  {
    
//     switch ($('input[type=radio]:checked').val()) {
//         case 'US':
//             $('#label4').text('$'); break;
//         case 'IQD':
//             $('#label4').text('IQD'); break;
//         default:
//             $('#label4').text('$');
// };
// });

// close the form
    document.getElementById("popup-form").style.display = "none";})
// ===================================================================================================================

class allOFThem
{
    constructor(){

    }
      Wallet() {}
       Transaction() {}
       Expense() {}
       Income() {}
       Currency() {}
    }
     