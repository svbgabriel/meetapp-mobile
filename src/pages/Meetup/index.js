import React, { useState, useMemo, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
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
  LoadingFooter,
} from './styles';
import api from '~/services/api';
import MeetupData from '~/components/MeetupData';

function Meetup({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadMeetupsFirst() {
    const { data } = await api.get(`meetups?page=1&date=${date.getTime()}`);

    setMeetups(data);
    setPage(1);
  }

  async function loadMeetups() {
    setLoading(true);
    const { data } = await api.get(
      `meetups?page=${page + 1}&date=${date.getTime()}`
    );

    setMeetups([...meetups, ...data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetupsFirst();
    }
  }, [isFocused, date]); // eslint-disable-line

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleEnroll(id) {
    await api.post(`enrollments/${id}`);
  }

  function renderFooter() {
    if (!loading) return null;
    return (
      <LoadingFooter>
        <ActivityIndicator />
      </LoadingFooter>
    );
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
          onEndReached={loadMeetups}
          onEndReachedThreshold={0.1}
          renderItem={({ item: meetup }) => (
            <MeetupData
              onEnroll={() => handleEnroll(meetup.id)}
              data={meetup}
            />
          )}
          ListFooterComponent={renderFooter}
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

Meetup.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Meetup);
