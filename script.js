let emptyParagraph=document.getElementById("letter");
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
const d = new Date();

const letterHeader=()=>{
    callbackFunction();
    return savedData[0]+" "+savedData[1]+" | "+savedData[2]+
    " | "+savedData[3]
 }

 const coverLetter=()=>{
return emptyParagraph.innerHTML=`${letterHeader()} <br><br> To hiring manager, <br><br> I hope this finds you well.`
}
 
const letterofResg=()=>{
    return emptyParagraph.innerHTML=`${letterHeader()}<br><br>Dear Manager,<br><br>I hope this mail finds you well. On this day,
    ${d.toDateString()}, I am unfortunately submitting my two week notice of resignation.`
}