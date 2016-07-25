var React=require("react");

var MovieDB = React.createClass({
  addMovieData: function(movie) {
    $.ajax({
        url:"http://localhost:8080/movie",
        type:'POST',
        datatype:'JSON',
        data: this.props.values,
        success:function(data){
            console.log(movie);
            console.log("data inserted");
            //this.setState({MovieData:values});
        }.bind(this),

      error:function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  deleteMovieData: function() {
    $.ajax({
        url:"http://localhost:8080/movie",
        type:'Delete',
        datatype:'JSON',
        data: this.props.values,
        success:function(data){
            //console.log(movie);
            console.log("data inserted");
            //this.setState({MovieData:values});
        }.bind(this),

      error:function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render : function(){
    return(
      <div className = "row">
      <div className="col-md-5">
      <img src={this.props.values.Poster}/>
      </div>
      <div className = "col-md-3"><h2><strong>{this.props.values.Title}</strong></h2></div>

        <div className="col-md-2">
          <button id="" name="" onClick={this.addMovieData} className="btn btn-lg btn-success">Add</button>
        </div>
        <div className="col-md-2">
          <button id="" name="" onClick={this.deleteMovieData} className="btn btn-lg btn-warning">Delete</button>
        </div>
      </div>
    );
  }
});

module.exports=MovieDB;
