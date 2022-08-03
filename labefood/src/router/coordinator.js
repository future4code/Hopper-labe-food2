export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/signUp")
}

export const goToAddAdress = (navigate) => {
    navigate("/addAdress")
}

export const goToFeed = (navigate) => {
    navigate("/restaurants")
}

export const goToDetails = (navigate, id) => {
    navigate(`/restaurants/${id}`)
}

export const goToCart = (navigate, id) => {
    navigate(`/restaurants/${id}/order`)
}

export const goToProfile = (navigate) => {
    navigate("/profile")
}





