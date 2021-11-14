export const capitalize = (text) => {
  const replaceFirstLetter = (firstLetter) => firstLetter.toUpperCase()
  const capitalizeText = text.trim().replace(/^\w/, replaceFirstLetter)

  return capitalizeText
}
