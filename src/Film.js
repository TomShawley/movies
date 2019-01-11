import React, { Component } from 'react';

class Film extends Component {
    render() {
        return (
            <div>
                 <div>
                    {this.props.data.Title}
                </div>
                <div>
                    {this.props.data.Year}
                </div>
                <div>
                    <img src={this.props.data.Poster} />
                </div><br />
            </div>
        );
    }
}

export default Film;
