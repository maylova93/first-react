
import FavoriteList from './FavoriteList';

function Favorites() {
    const favoriteFoods = ["Pizza", "Sushi", "Pasta", "Tacos", "Ice Cream"];
    const favoriteMovies = ["The Matrix", "The Notebook", "Interstellar", "The Dark Knight", "The Lord of the Rings"];

    return (
        <div>
            <FavoriteList items={favoriteFoods} title="My Favorite Foods" />
            <FavoriteList items={favoriteMovies} title="My Favorite Movies" />
        </div>
    );
}

export default Favorites;
