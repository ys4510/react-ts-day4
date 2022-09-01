import dayjs from  'dayjs';

const getCurrentDateTime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
}

export default getCurrentDateTime