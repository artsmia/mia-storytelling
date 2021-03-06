import React, { Component } from 'react'
import OrgManager from '../../components/cms/OrgManager'
import Template from '../../components/shared/Template'
import Auth from '../../auth'

export default class New extends Component {
  static getInitialProps = async ctx => {
    try {
      let auth = new Auth(ctx)
      await auth.authenticate()

      return {
        user: auth.user,
        tutorial: ctx.query ? ctx.query.tutorial : false
      }
    } catch (ex) {
      console.error(ex)
    }
  }

  render() {
    return (
      <Template {...this.props}>
        <OrgManager {...this.props} />
      </Template>
    )
  }
}
