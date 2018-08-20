import * as React from 'react';
// import * ReactDOM from 'react-dom';
import * as moment from 'moment';
// import * as PropTypes from 'prop-types';

// function noop() { return null; }

export interface CalendarProps {
  prefixCls?: string;
  className?: string;
  value?: moment.Moment;
}

class Calendar extends React.Component<CalendarProps, any> {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props: CalendarProps) {
    super(props)
  }
}

export default Calendar;
