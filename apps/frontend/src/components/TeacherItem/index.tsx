import React from 'react';

import './styles.scss';

import whatsappIcon from '@icons/whatsapp.svg';
import { api } from 'services/api';

interface TeacherItemProps {
  id: string;
  name: string;
  subject: string;
  price: string;
  bio: string;
  whatsapp: string;
  imageUrl: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  id,
  name,
  subject,
  price,
  bio,
  whatsapp,
  imageUrl,
}) => {
  const makeConnection = () => {
    api.post('/connections', { user_id: id });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={imageUrl} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{price}</strong>
        </p>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          onClick={makeConnection}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
