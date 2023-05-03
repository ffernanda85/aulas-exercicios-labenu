export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToRegisterPage = (navigate) => {
    navigate("/register")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/recipe/${id}`)
}

export const goToAddPage = (navigate) => {
    navigate("/add-recipe")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}
