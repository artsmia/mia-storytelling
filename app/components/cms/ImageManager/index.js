import { compose, withApollo } from 'react-apollo'
import Component from './ImageManager.component'
import query from '../../../apollo/queries/images'
import OrgQuery from '../../../apollo/queries/organization'

import {withRouter} from 'next/router'

let ExportComponent = Component

ExportComponent = compose(
  query,
  withApollo
)(ExportComponent)

ExportComponent = withRouter(ExportComponent)

export default ExportComponent
