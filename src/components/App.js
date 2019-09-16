import React from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import Imagelist from "./Imagelist";

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });

        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
                <Imagelist images={this.state.images} />
            </div >
        )
    }
}

export default App;