import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function Meetup() {
  return <View />;
}

const MeetupTabBarIcon = ({ tintColor }) => (
  <Icon name="format-list-bulleted" size={20} color={tintColor} />
);

MeetupTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Meetup.navigationOptions = {
  tarBarLabel: 'Meetups',
  tabBarIcon: MeetupTabBarIcon,
};
