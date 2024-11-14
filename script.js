const jokeBtn = document.getElementById('jokeBtn');
const jokeContainer = document.getElementById('joke');

// Function to fetch a joke from the JokeAPI
async function generateJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        jokeContainer.textContent = data.joke; // Display the joke
    } catch (error) {
        jokeContainer.textContent = 'Oops! Something went wrong. Please try again.';
        console.error('Error fetching joke:', error);
    }
}

// Event listener to generate a new joke when the button is clicked
jokeBtn.addEventListener('click', generateJoke);

// Generate a joke when the page loads
generateJoke();
