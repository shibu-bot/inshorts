
// components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import {styled} from "@mui/material";
import Articles from './components/Articles';

const AnotherDiv = styled('div')(({theme}) => ({
  width: "60%",
  margin: "20px auto 0 auto",
  [theme.breakpoints.down('md')] : {
    width:'75%'
  },
  [theme.breakpoints.down('sm')] : {
    width:'80%'
  }
}));

function App() {
  return (
    <div className="App">
      <Header/>
      <AnotherDiv>
        <InfoHeader/>
        <Articles/>
      </AnotherDiv>
    </div>
  );
}

export default App;
