import React from 'react';

import './../styles/Contact.scss';

class Contact extends React.Component {
  render() {
    const { data } = this.props;

    const formatDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const [
      { value: yyyy },
      ,
      { value: mm },
      ,
      { value: dd },
    ] = formatDate.formatToParts(new Date(data.admissionDate));

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt="avatar_contact" />
        </span>
        <span className="contact__data" data-testid="contact-name">
          {data.name}
        </span>
        <span className="contact__data" data-testid="contact-phone">
          {data.phone}
        </span>
        <span className="contact__data" data-testid="contact-country">
          {data.country}
        </span>
        <span className="contact__data" data-testid="contact-date">
          {`${dd}/${mm}/${yyyy}`}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {data.company}
        </span>
        <span className="contact__data" data-testid="contact-department">
          {data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
