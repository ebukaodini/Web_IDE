import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import Editor from 'components/Editor';
const Container = styled.div`
  width: 25rem;
  min-width: 25rem;
  height: 100%;
  border-right: 1px solid ${props => props.theme.bg3};
`;

const Header = styled.div`
  height: 2rem;
  padding: 0 0;
  display: flex;
  align-items: center;
  color: ${props => props.theme.white};
  font-size: 0.8125rem;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.bg2};
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  
`;

const StyledTabs = styled(({ children, ...other }) =>
  <Tabs
    {...other}
  >{children}</Tabs>
)`
  width: 100%;
  height: auto;
  & .MuiTouchRipple-root {
    visibility: hidden;
  }
`

export const EditorBlock: React.FC = ({ children }) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Header>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          disableRipple
        >
          <Tab disableRipple label="Item One" />
          <Tab disableRipple label="Item Two" />
          <Tab disableRipple label="Item Three" />
        </StyledTabs>
      </Header>
      <Wrapper>
        <Editor />
      </Wrapper>
    </Container>
  );
}
