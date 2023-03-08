import './filter-panel.scss';

function FilterPanel({filter, onFilterSelect}) {
    const buttonsData = [
        {
            filterName: 'brazil',
            textContent: 'Brazil',
        },

        {
            filterName: 'kenya',
            textContent: 'Kenya',
        },

        {
            filterName: 'columbia',
            textContent: 'Columbia',
        },
    ];

    const buttons = buttonsData.map(button => {
        const {filterName, textContent} = button;
        const isActive = filter === filterName ? 'btn-outline-dark' : 'btn-light';
        return (
            <button
                type="button"
                className={`btn ${isActive}`}
                key={filterName}
                onClick={() => onFilterSelect(filterName)}
                >
                {textContent}
            </button>
        );
    })

    return (
        <div className="filter-panel">
            <span className="filter-panel__text">Or filter</span>
            <div className="btn-group">
                {buttons}
            </div>
        </div>
    );
}

export default FilterPanel;