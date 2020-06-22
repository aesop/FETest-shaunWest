export const url = 'https://www.aesop.com/au/api/v1/nav/shop'

export const getCatalogue = async () => {
  const res = await fetch(url)
  return res.json()
}
