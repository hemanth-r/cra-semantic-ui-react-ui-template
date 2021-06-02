import React, {
  useState,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Sidebar, Message
} from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Routes from './Routes'
import Header from './shell/Header';
import SidebarMenu from './shell/SidebarMenu';

const useStyles = createUseStyles({
  container: {
    marginTop: '1em',
    marginLeft: '2.8em',
    marginRight: '1.7em',
    '& .ui.basic.segment': {
      paddingTop: '0.4em',
    },
    minHeight: '91vh',
  },
  centerContent: {
    flexGrow: 8,
    overflowX: 'auto',
    marginLeft: '17em',
  },
  centerContentWithToggleOn: {
    flexGrow: 8,
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  userDropdown: {
    fontWeight: 400,
  },
  notificationSidebar: {
    backgroundColor: '#ffffff',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    paddingTop: '1em',
    color: '#6b788d',
  },
  notificationWarning: {
    marginLeft: '1.8em',
  },
});

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isNotificationAvailable, setIsNotificationAvailable] = useState(false);
  const classes = useStyles();

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function handleNotificationClick() {
    setIsNotificationVisible(true);
  }

  return (
    <Router>
      <div className="App">
        <Header
          onSidebarToggleClick={toggleSidebar}
          onNotificationClick={handleNotificationClick}
          isNotificationVisible={isNotificationVisible} />
        <div>
          <SidebarMenu
            visible={isSidebarVisible}
          />
          <div className={isSidebarVisible
            ? classes.centerContent : classes.centerContentWithToggleOn}
          >
            <Sidebar.Pushable>
              <Sidebar.Pusher>
                {
                  (isNotificationAvailable)
                  && (
                    <div className={classes.notificationWarning}>
                      <Message className="status warning" type="warning">
                        <p>
                          You have warnings/errors. Please check notifications.
                            </p>
                      </Message>
                    </div>
                  )
                }
                <div className={classes.container}>

                  <Routes />
                </div>
              </Sidebar.Pusher>
              <Sidebar
                animation="overlay"
                icon="labeled"
                inverted="true"
                onHide={() => setIsNotificationVisible(false)}
                vertical="true"
                visible={isNotificationVisible}
                width="very wide"
                direction="right"
                className={classes.notificationSidebar}
              >
                {/* <Notification
                errorNotifications={errorNotifications}
                warningNotifications={warningNotifications}
              /> */}
              </Sidebar>
            </Sidebar.Pushable>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
