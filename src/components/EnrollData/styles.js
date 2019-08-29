import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  margin-bottom: 20px;
  height: 150px;
`;

export const TextContainer = styled.View`
  margin: 0 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

export const MeetupDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const MeetupDate = styled.Text`
  color: #999999;
  font-size: 13px;
  line-height: 15px;
  margin-left: 5px;
`;

export const LocalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Local = styled.Text`
  color: #999999;
  font-size: 13px;
  line-height: 15px;
  margin-left: 5px;
`;

export const OrganizerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Organizer = styled.Text`
  color: #999999;
  font-size: 13px;
  line-height: 15px;
  margin-left: 5px;
`;

export const EnrollButton = styled(Button)`
  margin: 20px;
`;
