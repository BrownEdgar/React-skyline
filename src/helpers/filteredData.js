const filteredData = (searchValue, photos) => {
  if (!searchValue) return photos;
  const result = photos.filter(elem => elem.title.includes(searchValue))
  return result
}
export default filteredData
