import './filter-panel.scss';

function FilterPanel() {
    return (
        <div className="btn-group">
            <span className="filter-panel__text">Or filter</span>
            <button
                type="button"
                className="btn btn-light"
                >
                Brazil
            </button>

            <button
                type="button"
                className="btn btn-light"
            >
                Kenya
            </button>

            <button
                type="button"
                className="btn btn-light"
            >
                Columbia
            </button>
        </div>
    );
}

export default FilterPanel;