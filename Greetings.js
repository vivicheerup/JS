import React from 'react'

class Greetings extends React.Component {

  componentDidMount () {
    window.onscroll = function () {
      console.log('on scrolling')
    }

    window.onresize = function () {
      console.log('screen width changed')
    }
  }

  componentWillUnmount () {
    window.onscroll = null
    window.onresize = null
  }

  render () {
    return (
      <div>
        <div>Greetings !</div>
        {this.props.children}
      </div>
    )
  }
}

export default Greetings
