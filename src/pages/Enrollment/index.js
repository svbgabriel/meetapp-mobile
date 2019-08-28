import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Enrollment() {
  return (
    <Background>
      <Header />
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
