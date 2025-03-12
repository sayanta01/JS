let history = [];

function visitPast(page) {
  history.push(page);
  console.log("Visited:", page);
  console.log("History:", history);
}

function goBack() {
  if (history.length > 0) {
    let lastPage = history.pop();
    console.log("Going back from:", lastPage);
    console.log("Now at:", history[history.length - 1] || "No page left");
  } else {
    console.log("No more history!");
  }
}

visitPast("Home");
// visitPast("About");
// visitPast("Contact");

goBack();
goBack();
