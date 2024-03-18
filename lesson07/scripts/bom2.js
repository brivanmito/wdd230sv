const input = document.querySelector('#favchap');
const button = document.querySelector('button'); 
const list = document.querySelector('#list');

// Create an array
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


// button.addEventListener('click', ()=> {
//     if (input.value != '') {
//         input.focus();
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.innerHTML = input.value;
//         deleteButton.textContent = "❌";
//         li.append(deleteButton);
//         list.append(li);
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             input.focus();
//         });
//         input.value = '';
//     }
//     else {
//         input.focus();
//     }
// });

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList() {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }