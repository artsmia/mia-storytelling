import React, {Component} from 'react'
import Root from '../lume/Root'
import withData from '../apollo'

class Index extends Component {

  static getInitialProps = async (context) => {
    try {

      return {
      }
    } catch (ex) {

    }
  }

  render() {
    return (
      <Root
        {...this.props}
      />
    )
  }

}

export default withData(props => <Index {...props} />)
