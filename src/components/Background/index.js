import LinerGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinerGradient).attrs({
  colors: ['#22202C', '#402845'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  useAngle: true,
  angle: 180,
})`
  flex: 1;
`;
