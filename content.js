function runSearch(){
    let questions = document.getElementsByClassName('freebirdFormviewerComponentsQuestionBaseTitle exportItemTitle freebirdCustomFont');
    var qs = [];
    for (question of questions){
        q = question.textContent;
        qs.push(q);
        NewTab(q)
    }
}

function NewTab(q) { 
    window.open('https://www.google.com/search?q='+q, '_blank');
}

chrome.runtime.onMessage.addListener(runSearch);