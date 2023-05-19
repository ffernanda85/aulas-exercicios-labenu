
export function goToHome(navigate) {
    navigate("/")
}

export function goToProfile(navigate) {
    navigate("/profile")
}

export function goToProducts(navigate, id) {
    navigate(`/product/${id}`)
}