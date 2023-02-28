
const refiner = (data) => {
  if (!data) return

  try {
    return data.animals
      .filter(a => a.weight !== null)
      .filter(a => !Array.isArray(a.photos))
      .sort((a, b) => a.weight - b.weight).reverse()
      .map(a => ({
        id: a.uniqueId,
        name: a.name,
        photo: Object.values(a.photos)[0].url,
        sex: a.sex,
        url: a.public_url,
        weight: a.weight
      }))

  } catch (error) {
    console.error(`Refining eeror: ${data}`, error)
  }
}

export default refiner
