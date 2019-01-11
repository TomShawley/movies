import React, { Component } from 'react';
import axios from 'axios';
import Film from './Film.js';
class GetMovie extends Component {
    constructor() {
        super();
        this.state = {
            movie: "asd",
            search: "",
            recent: []

        }
        this.findMovie = this.findMovie.bind(this);
        this.movieName = this.movieName.bind(this);

    }
    findMovie = (event) => {
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?s=' + this.state.search + '&apikey=9ff5d6f4',
            responseType: 'json'
        })
            .then(res => {
                this.setState({ movie: res.data.Search });
                console.log(res.data);
            })
    }



    movieName(event) {
        this.setState({ search: document.getElementById("textbox").value });
        this.setState({ recent: document.getElementById("textbox").value })
    }





    render() {
        let films = [];
        if(this.state.movie){
            for (let film of this.state.movie) 
                films.push(<Film data= {film}/> );
            }
        

        return (
            <div className="App-header">
                <h1>
                    Really Good Movie Database Search Thingy!
                </h1>
                <form onSubmit={this.update}>
                    <label>
                        Movie:
                    <input id="textbox" type="text" onChange={(this.movieName)}></input>
                        <input type="button" onClick={this.findMovie} value="Find Film"></input>
                    </label>
                </form><br />
               <div>{films}</div>
                <div> 
                    Recent Searches:<br />
                    {this.state.recent}
                </div>

            </div>



        );
    }
}



export default GetMovie;
