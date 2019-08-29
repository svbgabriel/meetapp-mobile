import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container,
  Banner,
  TextContainer,
  Title,
  MeetupDateContainer,
  MeetupDate,
  LocalContainer,
  Local,
  OrganizerContainer,
  Organizer,
  EnrollButton,
} from './styles';

export default function EnrollData({ data, onCancel }) {
  const meetupDateFormatted = useMemo(
    () =>
      format(parseISO(data.meetup.date), "d 'de' MMMM', às 'H'h'", {
        locale: pt,
      }),
    [data.meetup.date]
  );

  return (
    <Container>
      <Banner source={{ uri: data.meetup.banner.url }} />
      <TextContainer>
        <Title>{data.meetup.title}</Title>
        <MeetupDateContainer>
          <Icon name="event" size={14} color="#999999" />
          <MeetupDate>{meetupDateFormatted}</MeetupDate>
        </MeetupDateContainer>
        <LocalContainer>
          <Icon name="place" size={14} color="#999999" />
          <Local>{data.meetup.localization}</Local>
        </LocalContainer>
        <OrganizerContainer>
          <Icon name="person" size={14} color="#999999" />
          <Organizer>Organizador: {data.meetup.organizer.name}</Organizer>
        </OrganizerContainer>
      </TextContainer>
      <EnrollButton onPress={onCancel}>Cancelar inscrição</EnrollButton>
    </Container>
  );
}

EnrollData.propTypes = {
  data: PropTypes.shape({
    meetup: PropTypes.shape({
      banner: PropTypes.shape({
        url: PropTypes.string,
      }),
      organizer: PropTypes.shape({
        name: PropTypes.string,
      }),
      title: PropTypes.string,
      localization: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
