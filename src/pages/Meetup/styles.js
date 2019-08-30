import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ControlDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const MinusDate = styled.TouchableOpacity``;

export const ControlDate = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;

export const AddDate = styled.TouchableOpacity``;

export const MeetupList = styled.FlatList`
  padding: 0 20px;
`;

export const LoadingFooter = styled.View`
  align-self: center;
  margin: 0 20px;
`;
