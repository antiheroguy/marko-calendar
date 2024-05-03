const dayjs = require('dayjs')
const lunarCalendar = require('./components/lunar-calendar')
lunarCalendar.renderSync({ dayjs }).appendTo(document.body)
