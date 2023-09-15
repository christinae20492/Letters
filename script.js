let emptyParagraph=document.getElementById("letter");

const coverButton=document.getElementsByName("coverbtn");
const form = document.getElementById('base');
const formDataObj = {};
let savedData=[];
function callbackFunction(_event) {
    form.addEventListener('submit', callbackFunction);

    event.preventDefault();
    const myFormData = new FormData(form);
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    savedData=Object.values(formDataObj);
};

const letterHeader=()=>{
    callbackFunction();
    return savedData[0]+" "+savedData[1]+" | "+savedData[2]+
    " | "+savedData[3]+"<br><br> To hiring manager, <br><br> I hope this finds you well."
 }

 const coverLetter=()=>{
return emptyParagraph.innerHTML=`${letterHeader()}`
}
 
