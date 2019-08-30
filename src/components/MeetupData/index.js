import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  EnrolledText,
} from './styles';

export default function MeetupData({ data, onEnroll }) {
  const meetupDateFormatted = useMemo(
    () => format(parseISO(data.date), "d 'de' MMMM', às 'H'h'", { locale: pt }),
    [data.date]
  );

  return (
    <Container>
      <Banner source={{ uri: data.banner.url }} />
      <TextContainer>
        <Title>{data.title}</Title>
        <MeetupDateContainer>
          <Icon name="event" size={14} color="#999999" />
          <MeetupDate>{meetupDateFormatted}</MeetupDate>
        </MeetupDateContainer>
        <LocalContainer>
          <Icon name="place" size={14} color="#999999" />
          <Local>{data.localization}</Local>
        </LocalContainer>
        <OrganizerContainer>
          <Icon name="person" size={14} color="#999999" />
          <Organizer>Organizador: {data.organizer.name}</Organizer>
        </OrganizerContainer>
      </TextContainer>
      {data.isEnrolled ? (
        <EnrolledText>Você está inscrito</EnrolledText>
      ) : (
        <EnrollButton onPress={onEnroll}>Realizar inscrição</EnrollButton>
      )}
    </Container>
  );
}

MeetupData.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    localization: PropTypes.string,
    organizer: PropTypes.shape({
      name: PropTypes.string,
    }),
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
    isEnrolled: PropTypes.bool,
  }).isRequired,
  onEnroll: PropTypes.func.isRequired,
};
