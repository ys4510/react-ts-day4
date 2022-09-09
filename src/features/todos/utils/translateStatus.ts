import {TodoStatus, TODO_STATUSES} from '../types'

const translateStatus = (val: string):TodoStatus => {
  const statusArr = Object.entries(TODO_STATUSES);
  const index = statusArr.findIndex(status => status[1] === val)
  return statusArr[index][0] as TodoStatus;
}

export default translateStatus