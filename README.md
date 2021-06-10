# QucikSearch 

 QucikSearch is a simple browser extension which allow to search all google form's question on google by single click.

## Installation

Instaling QucikSearch

```
- clone or download this repo
- (extract if zipped)

On Chrome or Chromium :
    - in menu open extensions on chrome or visit chrome://extensions/
    - enabled Developer mode
    - click on load unpacked

On Firefox:
    - in menu open add-ons and themes or visit about:addons
    - click on strings ic⚙️n on top right
    - click on debug add-ons
    - click on load temporary add-on..
- navigate to to downloaded folder an open folder contained manifest.json
- and pin it
- enjoy 🔥 and happy exam 😂.

```
## Bookmarklet
 [Click and darg to bookmark tab](javascript:var%20%24jscomp%3D%24jscomp%7C%7C%7B%7D%3B%24jscomp.scope%3D%7B%7D%3B%24jscomp.arrayIteratorImpl%3Dfunction(a)%7Bvar%20b%3D0%3Breturn%20function()%7Breturn%20b%3Ca.length%3F%7Bdone%3A!1%2Cvalue%3Aa%5Bb%2B%2B%5D%7D%3A%7Bdone%3A!0%7D%7D%7D%3B%24jscomp.arrayIterator%3Dfunction(a)%7Breturn%7Bnext%3A%24jscomp.arrayIteratorImpl(a)%7D%7D%3B%24jscomp.makeIterator%3Dfunction(a)%7Bvar%20b%3D%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.iterator%26%26a%5BSymbol.iterator%5D%3Breturn%20b%3Fb.call(a)%3A%24jscomp.arrayIterator(a)%7D%3Bfunction%20NewTab(a)%7Bwindow.open(%22https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%22%2Ba%2C%22_blank%22)%7Dfor(var%20questions%3Ddocument.getElementsByClassName(%22freebirdFormviewerComponentsQuestionBaseTitle%20exportItemTitle%20freebirdCustomFont%22)%2Cqs%3D%5B%5D%2C%24jscomp%24iter%240%3D%24jscomp.makeIterator(questions)%2C%24jscomp%24key%24question%3D%24jscomp%24iter%240.next()%3B!%24jscomp%24key%24question.done%3B%24jscomp%24key%24question%3D%24jscomp%24iter%240.next())question%3D%24jscomp%24key%24question.value%2Cq%3Dquestion.textContent%2Cqs.push(q)%2CNewTab(q)%3Bvoid+0)
 
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.