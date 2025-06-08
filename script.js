
// 1. Select all elements with the class "title"
const titles = document.querySelectorAll('.title');

// 2. Select all elements with the class "myText"
const texts = document.querySelectorAll('.myText');

// Check if the counts match (optional validation)
if (titles.length !== texts.length) {
  console.warn("Number of .title and .myText elements do not match!");
}

// 5. Function to remove "active" class from all .myText elements
function removeAllActive() {
  texts.forEach(text => text.classList.remove('active'));
}

// 3 & 4. Add click event listener to each title
titles.forEach(title => {
  title.addEventListener('click', () => {
    // 5. Remove all active classes
    removeAllActive();

    // 4. Get the next element sibling and toggle its "active" class
    const next = title.nextElementSibling;
    if (next && next.classList.contains('myText')) {
      next.classList.toggle('active');
    }
  });
});
t

