import './App.css';
import "./components/src/style.css"
import Media from 'react-media';

import MainContainer from './container/MainContainer';
import MobileContainer from './container/MobileContainer';

function App() {

  const MEDIA_QUERIES = {
    pc: '(min-width: 1000px)',
    mobile: '(max-width:999px)',
  }

  const DesktopMode = () => (
    <div className="App">
      <div id="construction">
        Under construction<br />
        Mobile app
        <br />
        &<br />
        Portfolio Menu<br />
        are coming soon
      </div>
      <MainContainer />
    </div>
  )

  const MobileMode = () => (
    <div className="App">
      <MobileContainer />
    </div>)

  return (
    <div>
      <Media queries={MEDIA_QUERIES}>
        {matches => {
          return (
            <>
              {matches.pc && <DesktopMode />}
              {matches.mobile && <MobileMode />}
            </>
          )
        }}

      </Media>
    </div>
  )
}

export default App;
