import React from 'react';

import './../styles/Filters.scss';

class Filters extends React.Component {
  render() {
    const { searchBy, direction, handleChange, handleByOrder } = this.props;

    const filters = {
      name: 'Nome',
      country: 'País',
      company: 'Empresa',
      department: 'Departamento',
      admissionDate: 'Data de admissão',
    };

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(event) => handleChange(event.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          {Object.keys(filters).map((filter) => (
            <button
              key={filter}
              className={`filters__item ${
                searchBy === filter ? 'is-selected' : ''
              }`}
              onClick={() => handleByOrder(filter)}
            >
              {filters[filter]}
              {searchBy === filter && (
                <i className={`fas fa-sort-${direction}`} />
              )}
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Filters;
