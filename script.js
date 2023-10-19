const inputEl=document.querySelector("#input"); 
const wordCount=document.querySelector(".words");
const characterCount=document.querySelector(".characters");
const sentenceCount=document.querySelector(".sentences");
const paragraphCount=document.querySelector(".paragraphs");



inputEl.addEventListener("input",()=>{
    if(inputEl.value){
     // count words 
     const wordsArray= inputEl.value.split(" ").filter((word)=> word !== ""); 
     wordCount.innerText=wordsArray.length;
     // count characters 
     characterCount.innerText=inputEl.value.length;
     // count sentences 
     const sentenceArray=inputEl.value.split("."); 
     sentenceCount.innerText=sentenceArray.length-1;
     // count paragraphs 
     const paragraphArray=inputEl.value.split("\n").filter((p)=> p.trim() != "");
     paragraphCount.innerText=paragraphArray.length;
    }else{
        wordCount.innerText=0;
        characterCount.innerText=0;
        sentenceCount.innerText=0;
        paragraphCount.innerText=0;
    }
})