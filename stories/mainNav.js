import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { MemoryRouter } from 'react-router-dom'

import MainNav from '../src/components/MainNav'

const cities = [
  {
    name: 'Guadalajara',
    id: 8133378,
  },
  {
    name: 'Hoofddorp',
    id: 2753801,
    active: true,
  },
  {
    name: 'Baku',
    id: 587084,
  },
]

storiesOf('MainNav', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('MainNav default', () => (
    <MemoryRouter>
      <MainNav cities={cities} />
    </MemoryRouter>
  ))

