import { schema } from 'normalizr'
import city from 'store/schemas/city'

const forecast = new schema.Entity('forecast', {
  city,
}, {
  idAttribute: value => value.city.id,
})

export default forecast
