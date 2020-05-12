import React from 'react';

import Contact from './Contact';

import './../styles/Contacts.scss';

class Contacts extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>

          {data ? (
            data.map(({ id, ...props }) => <Contact key={id} data={props} />)
          ) : (
            <div>There was a problem fetching your data</div>
          )}
        </section>
      </div>
    );
  }
}

export default Contacts;
