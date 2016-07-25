var React = require("react");
// var ReactDOM = require("react-dom");
var MovieDB = require("./moviedb");

var AllMovieFromDB = React.createClass({

  render: function() {

    var allMovieDataMap = this.props.allMovie.map( function(movie){
      return(
        <MovieDB values={movie} key={movie.imdbID}></MovieDB>
      );
    }.bind(this));

      return (
     <div>
      {allMovieDataMap}
     </div>
   );
 }
});

module.exports = AllMovieFromDB;
