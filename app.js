var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output")

//var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverurl="	https://api.funtranslations.com/translate/minion.json" 
function getTranslationUrl(text){
    return serverurl+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured!",error)
    alert("someting wrong with server! try again after sometime")
}

function clickHandler() {

    var inputText=txtInput.value;//took input

    //calling server for processing
    fetch(getTranslationUrl(inputText))
    .then(response=>response.json())
    .then(json=>
        {var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;//output
    })   
    .catch(errorHandler)
};





btnTranslate.addEventListener("click", clickHandler);



