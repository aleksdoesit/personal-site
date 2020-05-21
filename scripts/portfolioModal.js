document.getElementById('portfolioItem1').addEventListener('click', function () {

    let portfolioDiv = document.createElement('div')

    portfolioDiv.classList.add('portfolioDiv')

    portfolioDiv.id = 'portfolioDiv'

    portfolioDiv.innerHTML = `
    <div id='portfolioMask' class='portfolioMask'>
    <button id='closePortfolioItem' class='closePortfolioItem'><i class="fas fa-times"></i></button>
    </div>
    <div class='popupContainer'>
    <img class='portfolioImage1'src='./assets/robotrivia.png' alt='an image of my app RoboTrivia'>
    <h3>RoboTrivia!</h3>
    <div>
    <p>A collaborative project using mob programming to deliver a dynamic multiplayer trivia application. Designed and deployed under a strict turn-around time with the use of a GitHub and command line workflow.</p>
    <p>This project utilised React and dynamic API calls to generate questions from an array of categories. In addition scores are tracked and uploaded to a leaderboard hosted on Firebase.</p>
    </div>
    <div>
    <button><a href='https://robogames.github.io/RoboTrivia' target="_blank"/>Visit Site</a></button><button><a href='https://github.com/RoboGames/RoboTrivia' target="_blank">Git Hub</a></button>
    </div>
    </div>
    `

    document.getElementById('portfolio').appendChild(portfolioDiv)
    document.getElementById('closePortfolioItem').addEventListener('click', function () {
        document.getElementById('portfolioDiv').remove()
    })

    document.getElementById('portfolioMask').addEventListener('click', function () {
        document.getElementById('portfolioDiv').remove()
    })
})
