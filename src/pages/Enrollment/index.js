import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
import { Container, MeetupList } from './styles';
import api from '~/services/api';
import EnrollData from '~/components/EnrollData';

export default function Enrollment() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('enrollments');

      setSchedule(response.data);
    }

    loadSchedule();
  }, []);

  function handleCancel() {}

  return (
    <Background>
      <Header />
      <Container>
        <MeetupList
          data={schedule}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <EnrollData onCancel={() => handleCancel()} data={item} />
          )}
        />
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
