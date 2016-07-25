var React=require("react");
var ReactDOM=require("react-dom");
var Movieform=require("./movieform");
var Movielist=require("./movielist");
var ViewAllForm=require("./viewallform");
var AllMovieFromDB=require("./allmoviefromdb");

var Moviebox = React.createClass({

  getInitialState: function()
  {
    return{AllData:[]};
  },

  submitTitleData: function(movie) {

    $.ajax({
        url:"http://www.omdbapi.com/?s="+movie.Title+"&y=&plot=short&r=json",
        type:'Get',
        datatype:'JSON',
        success:function(data){
          //  console.log(data);
            this.setState({AllData:data.Search});

        }.bind(this),

      error:function(err){
        console.log(err);
      }.bind(this)
    });
    //console.log(movie.Title);
  },

  $.ajax({
      url:"localhost:8080/movie",
      type:'Get',
      datatype:'JSON',
      success:function(data){
          console.log("hello");
          this.setState({AllData:data.Search});

      }.bind(this),

    error:function(err){
      console.log(err);
    }.bind(this)
  });

},


 render: function() {
   return (
     <div>
       <ViewAllForm />
       <Movieform handleSubmitTitle={this.submitTitleData}/>
       <Movielist allMovieData={this.state.AllData}/>
       <AllMovieFromDB allMovie={this.state.AllData}/>
     </div>
   );
 }
});

module.exports = Moviebox;
