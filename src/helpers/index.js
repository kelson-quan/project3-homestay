import titleize from 'titleize'
import * as moment from 'moment';

export const rentalType = (isShared) => isShared ? "shared" : "entire"
export const toUpperCase = value => value ? titleize(value) : ''
export const getRangeOfDates = (startAt, endAt, dateFormat) => {
    const tempDates = [];
    const mEndAt = moment(endAt);
    let mStartAt = moment(startAt);
  
    while (mStartAt < mEndAt) {
        tempDates.push(mStartAt.format(dateFormat));
        mStartAt = mStartAt.add(1, 'day');
    }
  
    tempDates.push(mEndAt.format(dateFormat));
  
    return tempDates;
}
