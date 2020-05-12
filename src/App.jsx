import React from 'react';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';

import getContacts from './services/index';
import { handleInputChange, sortArr } from './utils/index';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataOrig: [],
      loading: true,
      searchBy: 'name',
      orderBy: 'down',
    };
  }

  async componentDidMount() {
    const data = await getContacts();
    // const { orderBy, searchBy } = this.state;
    this.setState({
      // data: sortArr(data, orderBy, searchBy),
      data: data,
      dataOrig: data,
      loading: false,
    });
  }

  // onChange
  handleChange = (inputChange) => {
    const dataFilter = handleInputChange(
      this.state.data,
      inputChange,
      this.state.dataOrig,
      this.state.searchBy,
      this.state.orderBy
    );

    this.setState({
      data: dataFilter,
    });
  };

  // onClick button
  handleByOrder = (filter) => {
    const ordBy = this.state.orderBy === 'up' ? 'down' : 'up';
    const { data } = this.state;
    this.setState({
      searchBy: filter,
      orderBy: ordBy,
      data: sortArr(data, ordBy, filter),
    });
  };

  render() {
    return (
      <div className="app" data-testid="app">
        <React.Fragment>
          <Topbar />

          <Filters
            handleChange={this.handleChange}
            handleByOrder={this.handleByOrder}
            searchBy={this.state.searchBy}
            direction={this.state.orderBy}
          />
          <Contacts data={this.state.data} />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
