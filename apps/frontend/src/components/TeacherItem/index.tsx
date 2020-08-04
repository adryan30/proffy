import React from 'react';

import './styles.scss';

import whatsappIcon from '@icons/whatsapp.svg';

interface TeacherItemProps {
  name: string;
  subject: string;
  price: string;
  imageUrl: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  name,
  imageUrl,
  subject,
  price,
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={imageUrl} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{price}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
