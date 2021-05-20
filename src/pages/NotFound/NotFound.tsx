import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

export const NotFound: FC = observer(() => (
  <div>
    <h1>Not found</h1>
    <p>This page does not exist</p>
  </div>
))
