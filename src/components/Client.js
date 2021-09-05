import React from 'react';
import './Client.css';

function Client({ client }) {
  return (
    <>
      <img
        className="client__img"
        src={client.PicUrl}
        alt="imagen de cliente"
      />
      <div className="client__info">
        <p className="client__name">{client.Name}</p>
        <p className="client__quotes ">{client.FirstAppearance}</p>
      </div>
    </>
  );
}

export default Client;
