var React = require("react");
// var ReactDOM = require("react-dom");
var Movie = require("./movie");

var Movielist = React.createClass({

  render: function() {

    var allMovieDataMap = this.props.allMovieData.map( function(movie){
      return(
        <Movie values={movie} key={movie.imdbID}></Movie>
      );
    }.bind(this));

      return (
     <div>
      {allMovieDataMap}
     </div>
   );
 }
});

module.exports = Movielist;
