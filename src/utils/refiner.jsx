
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
                birthday: new Date(a.birthday * 1000).toDateString(),
                intake_date: new Date(a.intake_date * 1000).toDateString(),
                sex: a.sex,
                breed: a.breed,
                url: a.public_url,
                weight: a.weight,
                attributes: a.attributes
            }))

    } catch (error) {
        console.error(`Refining eeror: ${data}`, error)
    }
}

export default refiner
