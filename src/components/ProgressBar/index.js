import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import './index.scss'

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }
`

const ProgressBar = ({ value }) => {
    return (
        <Container color={'#ff7979'} width={'450px'}>
            <progress value={value} max={100} />
            <span>{(value / 100) * 100}%</span>
        </Container>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    color: 'lightBlue',
    width: '250px',
}

export default ProgressBar
