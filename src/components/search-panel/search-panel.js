import {Component} from "react";

import './search-panel.scss';

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
           term,
        });
        this.props.onUpdateSearch(term);
    }

    render() {
        const {term} = this.state;

        return (
            <div className="search-panel">
                <span className="search-panel__text">Looking for</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Start typing here..."
                    value={term}
                    onChange={this.onUpdateSearch}
                />
            </div>
        );
    }
}

export default SearchPanel;