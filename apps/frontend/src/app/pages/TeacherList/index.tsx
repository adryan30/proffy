import React, { useState, useEffect } from 'react';

import './styles.scss';
import PageHeader from '@components/PageHeader';
import TeacherItem from '@components/TeacherItem';
import Input from '@components/Input';
import Select from '@components/Select';

import { api } from 'services/api';
import { UserResponse } from 'interfaces/user.interface';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [proffyList, setProffyList] = useState<UserResponse[]>();

  useEffect(() => {
    if (subject && week_day && time) {
      api
        .get('/classes', {
          params: { subject, week_day, time },
        })
        .then((response) => {
          if (response.status === 200) {
            setProffyList(response.data);
          }
        });
    }
  }, [subject, time, week_day]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              {
                value: 'Artes',
                label: 'Artes',
              },
              {
                value: 'Biologia',
                label: 'Biologia',
              },
              {
                value: 'Ciências',
                label: 'Ciências',
              },
              {
                value: 'Educação Física',
                label: 'Educação Física',
              },
              {
                value: 'Física',
                label: 'Física',
              },
              {
                value: 'Geografia',
                label: 'Geografia',
              },
              {
                value: 'História',
                label: 'História',
              },
              {
                value: 'Matemática',
                label: 'Matemática',
              },
              {
                value: 'Português',
                label: 'Português',
              },
              {
                value: 'Química',
                label: 'Química',
              },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              {
                value: '0',
                label: 'Domingo',
              },
              {
                value: '1',
                label: 'Segunda-feira',
              },
              {
                value: '2',
                label: 'Terça-feira',
              },
              {
                value: '3',
                label: 'Quarta-feira',
              },
              {
                value: '4',
                label: 'Quinta-feira',
              },
              {
                value: '5',
                label: 'Sexta-feira',
              },
              {
                value: '6',
                label: 'Sábado',
              },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {proffyList === undefined ? (
          <h1>Realize uma pesquisa...</h1>
        ) : proffyList.length === 0 ? (
          <h1>Nenhum professor encontrado...</h1>
        ) : (
          proffyList.map((proffy) => (
            <TeacherItem
              key={proffy.id}
              id={proffy.id}
              name={proffy.user.name}
              bio={proffy.user.bio}
              subject={proffy.subject}
              whatsapp={proffy.user.whatsapp}
              price={`R$ ${proffy.cost.toFixed(2).replace('.', ',')}`}
              imageUrl={proffy.user.avatar}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default TeacherList;
