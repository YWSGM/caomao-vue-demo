import ajax from './ajax'
const BAES = '/api'

export const reqHome = ()=>ajax.get(BAES + `/home`)