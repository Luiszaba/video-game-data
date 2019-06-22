import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AppBar} from 'material-ui'

class GameBrowser extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Game Browser" />
        <Container>
          <Row>
            <p>search</p>
          </Row>
          <Row>
            <p>Game list</p>
          </Row>
        </Container>
      </div>
    )
  }
}
export default GameBrowser
