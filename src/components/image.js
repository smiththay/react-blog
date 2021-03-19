import React, { Component } from 'react'
import axios from 'axios'

export default class image extends Component {
    constructor(props) {
        super();
        this.state = {
            imageData: {}

        }

    }

    componentDidMount() {
        let apiURL = 'https://api.unsplash.com'
        let this_ = this;
        axios.get(apiURL + '/photos/random' + '/?client_id=opJQMom9007r06ZTdgG_yLTzcdupBGfDFi1p7N-KSaM')
            .then(function (response) {
                console.log(response.data)
                this_.setState({ imageData: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {
        return (
            <div className='row'>
                <div className='col'>
                {(Object.keys(this.state.imageData).length > 0 )
                  ?<img src={this.state.imageData.urls.full} />
                  : <div>Image Loading</div>
                  }
                </div>
            </div>
            )
        
          }
}

//export default Image