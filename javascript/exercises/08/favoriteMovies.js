const movies = {
    Samaritan: "Samaritan",
    TopGunMaveric: "Top Gun: Maveric",
    Sandman: "The Sandman",
    BreakingBad: "Breaking Bad",
};

function favoriteMovies(movie) {
    let result;
    
    switch (movie) {
    case movies.Samaritan:
        result = `Your favorite movie is ${movies.Samaritan}`;
        break;
    case movies.TopGunMaveric:
        result = `Your favorite movie is ${movies.TopGunMaveric}`;
        break;
    case movies.Sandman:
        result = `Your favorite movie is ${movies.Sandman}`;
        break;
    case movies.BreakingBad:
        result = `Your favorite movie is ${movies.BreakingBad}`;
        break;
    default:
        break;
    }

    return result;
}

export { movies, favoriteMovies };