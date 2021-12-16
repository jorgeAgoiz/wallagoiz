export const emptyAvatarPic = ({ name, lastName }) => {
  const fullName = `${name} ${lastName}`.split(' ')
  const initials = fullName[0][0] + fullName[1][0]
  return initials
}
