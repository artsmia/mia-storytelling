import Model from '../../../db/models/Detail'

export default async function(
  src,
  id,
  ctx
){
  try {
    return await model.findById(id)
  } catch (ex) {
    console.error(ex)
  }
}
