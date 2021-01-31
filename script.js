let results = document.getElementById('results');
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function () {
    let word = document.getElementById('word');

    if (word.value != null && word.value != '') {

        wordText = word.value;
        word.value = '';
    }
    else {
        alert('Please enter a proper word');
    }

    // let results = document.getElementById('results');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    //populating the results in DOM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function () {
        const dictionary = JSON.parse(this.responseText);
        let str = '';
        wordText = wordText.toLowerCase();
        console.log(dictionary[wordText]);
        if (dictionary[wordText] != undefined) {

            dictionary[wordText].forEach(element => {
                console.log(element);
                str += `<li> ${element} </li>`
            });
            // console.log(dictionary['results'][0]['definition']);
        }
        else {
            str = `Sorry could not find the word ${wordText}`;
        }
        results.innerHTML = str;
    }
    xhr.send();
});
let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function () {
    results.innerHTML = `Search to get results`;
})