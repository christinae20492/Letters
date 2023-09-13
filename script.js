
const form = document.querySelector('form');
const formDataObj = {};
form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
};

const firstName=formDataObj.fname;
const lastName=formDataObj.lname;
const phoneNum=formDataObj.ph;
const emailAddress=formDataObj.email;
const nameOfCompany=formDataObj.company;
const titlePosition=formDataObj.position;
//const emptyP=document.getElementById("letter");
//const genCover=document.getElementById("coverbtn");

const headerTop=()=>{
    return `${firstName} ${lastName} | ${phoneNum} | ${emailAddress} <br><br> To hiring manager, <br><br> I hope this finds you well.`
 }

 const coverLetter=()=>{
return headerTop();

 }