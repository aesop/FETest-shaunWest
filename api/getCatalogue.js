export const url = 'http://localhost:3000/api/v1/nav/shop'

export const getCatalogue = async () => {
  const res = await fetch(url)
  return res.json()
}
