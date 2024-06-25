import moment from 'moment'
import _ from 'lodash'

moment.locale("ja");

export default defineEventHandler(async () => {
  const url = "https://worldtimeapi.org/api/timezone/Asia/Tokyo"
  const res = await $fetch(url)
  return {
    currentDate: moment().format("YYYY年MM月DD日(ddd) hh:mm:ss"),
    fetchResponse: res,
    bool: _.isString(0)
  }
})
