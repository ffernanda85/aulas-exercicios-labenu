export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
}