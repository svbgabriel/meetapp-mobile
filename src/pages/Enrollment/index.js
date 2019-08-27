import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function Enrollment() {
  return <View />;
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
