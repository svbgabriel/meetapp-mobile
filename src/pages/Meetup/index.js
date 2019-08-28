import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Meetup() {
  return (
    <Background>
      <Header />
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
