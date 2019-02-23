import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
} from 'components/Grid'

import styles from './styles.css'

function MainNav(props) {
  const { active, cities } = props

  return (
    <Container isFluid>
      <Row className={styles.mainNav} middle="xs" start="xs" tagName="ul" top="xs">
        {cities.map(city => (
          <Col key={city.id} tagName="li" xs={4}>
            {active === city.id
              ? <strong>{city.name}</strong>
              : <Link to={city.id}>{city.name}</Link>
            }
          </Col>
        ))}
      </Row>
    </Container>
  )
}

MainNav.propTypes = {
  /** ID of active city */
  active: PropTypes.string,
  /** Cities to display on tab */
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    id: PropTypes.id,
  })),
}

export default MainNav
