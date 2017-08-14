import React, {Component} from 'react'
import JoinOrCreate from '../../../components/JoinOrCreate'
import Cookie from 'js-cookie'

export default class extends Component {

  static getInitialProps = async (ctx) => {
    try {
      const userId = (ctx.req) ? ctx.req.userId : Cookie.get("userId")

      return {
        userId
      }
    } catch (ex) {
      console.error(ex)
    }
  }

  render() {
    return (
      <JoinOrCreate
        {...this.props}
      />
    )
  }
}