import { SELECTED_DATE_RANGE } from '../constants'

export default (selectedDateRangeState = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SELECTED_DATE_RANGE:
      return payload.selectedDateRange
    default:
      return selectedDateRangeState
  }
}
