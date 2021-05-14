/*
 * Keeps the app's secrets (anything that can be stolen and used inappropriately).
 *
 * Note, if we were using public GIT repository, this file would NOT be committed and pushed!
 * Note, these are throw-away tokens, but please do not abuse so everyone in the class can
 * experiment with this example.
 *
 * @author Robert C. Duvall
 * @author Mac Stringer
 */

// Note, these objects can hold whatever you need to access your API (e.g., username/password, etc.)
exports.CHESS_API = {
    URL: 'http://chess-api-chess.herokuapp.com/api/v1/chess/one',
};

