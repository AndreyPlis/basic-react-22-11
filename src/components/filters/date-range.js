import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import connect from 'react-redux/es/connect/connect'
import { selectDateRange } from '../../ac'

class DateRange extends Component {
  handleDayClick = (day) => {
    this.props.selectDateRange(DateUtils.addDayToRange(day, this.props.articles.selectedDateRange))
  }

  render() {
    const { from, to } = this.props.articles.selectedDateRange
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          initialMonth={new Date('06 01 2016')}
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { selectDateRange: selectDateRange }
)(DateRange)
