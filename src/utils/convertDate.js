export const convertDate = ({ date }) => {
  const stringDate = date.toLocaleString()
  const arrayDate = stringDate.split(' ')
  return arrayDate[0]
}
