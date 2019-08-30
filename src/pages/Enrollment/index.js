import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
import { Container, MeetupList, NotFoundText } from './styles';
import api from '~/services/api';
import EnrollData from '~/components/EnrollData';

function Enrollment({ isFocused }) {
  const [schedules, setSchedules] = useState([]);

  async function loadSchedule() {
    const response = await api.get('enrollments');

    setSchedules(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSchedule();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api.delete(`enrollments/${id}`);

    setSchedules(schedules.filter(schedule => schedule.meetup_id !== id));
  }

  return (
    <Background>
      <Header />
      <Container>
        {schedules.length > 0 ? (
          <MeetupList
            data={schedules}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <EnrollData
                onCancel={() => handleCancel(item.meetup_id)}
                data={item}
              />
            )}
          />
        ) : (
          <NotFoundText>Você não se inscreveu em nenhum Meetup</NotFoundText>
        )}
      </Container>
    </Background>
  );
}

const EnrollmentTabBarIcon = ({ tintColor }) => (
  <Icon name="local-offer" size={20} color={tintColor} />
);

EnrollmentTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Enrollment.navigationOptions = {
  title: 'Inscrições',
  tabBarIcon: EnrollmentTabBarIcon,
};

Enrollment.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Enrollment);
