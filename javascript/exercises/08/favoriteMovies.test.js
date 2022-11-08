import { favoriteMovies, movies } from "./favoriteMovies";

test("Return favorite movie based on input", () => {
    expect(favoriteMovies(movies.Samaritan)).toEqual("Your favorite movie is Samaritan");
    expect(favoriteMovies(movies.TopGunMaveric)).toEqual("Your favorite movie is Top Gun: Maveric");
    expect(favoriteMovies(movies.Sandman)).toEqual("Your favorite movie is The Sandman");
    expect(favoriteMovies(movies.BreakingBad)).toEqual("Your favorite movie is Breaking Bad");
});