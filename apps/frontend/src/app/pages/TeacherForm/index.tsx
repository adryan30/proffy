import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

import PageHeader from '@components/PageHeader';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import Select from '@components/Select';

import warningIcon from '@icons/warning.svg';

import { api } from 'services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduledItems, setScheduledItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);
  const addNewItem = () => {
    setScheduledItems([...scheduledItems, { week_day: 0, from: '', to: '' }]);
  };

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const newScheduledItems = scheduledItems.map((currentSchedule, index) => {
      if (index === position) {
        return { ...currentSchedule, [field]: value };
      }
      return currentSchedule;
    });
    setScheduledItems(newScheduledItems);
  };

  const handleCreateNewClass = (e: FormEvent) => {
    e.preventDefault();
    api
      .post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduledItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso');
        history.push('/');
      })
      .catch(() => {
        alert('Algo deu errado no cadastro');
      });
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateNewClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              label="Matéria"
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
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis{' '}
              <button type="button" onClick={addNewItem}>
                + Novo Horário
              </button>
            </legend>
            {scheduledItems.map((scheduledItem, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduledItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                  name="from"
                  label="Dás"
                  type="time"
                  value={scheduledItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                ></Input>
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduledItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                ></Input>
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="button">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
