function getActivity() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
    document.getElementById('activity').innerText = data.fact;
    })
    .catch(error => {
    console.error("Fetch error:", error);
    document.getElementById('activity').innerText = "Oops! Couldn't fetch a cat fact. Try again later.";
    });
}