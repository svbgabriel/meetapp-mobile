import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
import {
  Container,
  ControlDateContainer,
  MinusDate,
  ControlDate,
  AddDate,
  MeetupList,
} from './styles';
import api from '~/services/api';
import MeetupData from '~/components/MeetupData';

export default function Meetup() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(
        `meetups?page=${page}&date=${date.getTime()}`
      );

      // setPage(page + 1);
      setMeetups(response.data);
    }

    loadMeetups();
  }, [date, page]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
  }

  async function handleEnroll(id) {
    await api.post(`enrollments/${id}`);
  }

  return (
    <Background>
      <Header />
      <Container>
        <ControlDateContainer>
          <MinusDate onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#ffffff" />
          </MinusDate>
          <ControlDate>{dateFormatted}</ControlDate>
          <AddDate onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#ffffff" />
          </AddDate>
        </ControlDateContainer>
        <MeetupList
          data={meetups}
          keyExtractor={meetup => String(meetup.id)}
          renderItem={({ item: meetup }) => (
            <MeetupData
              onEnroll={() => handleEnroll(meetup.id)}
              data={meetup}
            />
          )}
        />
      </Container>
    </Background>
  );
}

const MeetupTabBarIcon = ({ tintColor }) => (
  <Icon name="format-list-bulleted" size={20} color={tintColor} />
);

MeetupTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Meetup.navigationOptions = {
  title: 'Meetups',
  tabBarIcon: MeetupTabBarIcon,
};
