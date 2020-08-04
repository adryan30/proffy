import React from 'react';

import './styles.scss';
import PageHeader from '@components/PageHeader';
import TeacherItem from '@components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Adryan Almeida"
          subject="Química"
          price="R$ 80,00"
          imageUrl="https://avatars1.githubusercontent.com/u/41494576?s=460&u=ebb6c58439ae87e4abe274813e2a1ede1ec04b78&v=4"
        />
      </main>
    </div>
  );
};

export default TeacherList;
