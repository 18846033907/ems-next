import styled from 'styled-components';

export const HeadWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  position: relative;
`;

export const HeadStart = styled.span``;

export const LogoWrapper = styled.img`
  height: ${(props) => (props.height ? props.height : '52px')};
  width: ${(props) => (props.width ? props.width : '251px')};
`;
export const HeadEnd = styled.span`
  position: absolute;
  right: 0;
  font-size: 1.15rem;
`;
export const Title = styled.span`
  font-size: 1.75rem;
  color: #fff;
`;
