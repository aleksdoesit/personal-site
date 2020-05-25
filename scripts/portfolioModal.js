// Modal for Item 1

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
    <div class='linkWrapper'>
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

// Modal for Item 2

document.getElementById('portfolioItem2').addEventListener('click', function () {

    let portfolioDiv = document.createElement('div')

    portfolioDiv.classList.add('portfolioDiv')

    portfolioDiv.id = 'portfolioDiv'

    portfolioDiv.innerHTML = `
    <div id='portfolioMask' class='portfolioMask'>
    <button id='closePortfolioItem' class='closePortfolioItem'><i class="fas fa-times"></i></button>
    </div>
    <div class='popupContainer'>
    <img class='portfolioImage1'src='./assets/bingr.png' alt='an image of my app Bingr'>
    <h3>Bingr</h3>
    <div>
    <p>A passion project application designed to be a one-stop place that currates TV show recommendations across all networks and platforms. Making use of React, React Router, and RESTful API calls to build a simple, snappy, and quick one-page React web app.</p>
    <p>Please note this is a work in progress! Responsiveness not yet fully functional :)</p>
    </div>
    <div class='linkWrapper'>
    <button><a href='https://aleksdoesit.github.io/Bingr/#/' target="_blank"/>Visit Site</a></button><button><a href='https://github.com/aleksdoesit/Bingr' target="_blank">Git Hub</a></button>
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