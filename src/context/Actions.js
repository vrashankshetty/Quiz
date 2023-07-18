export const LoginStart=()=>({
    type:"Start"
})
export const LoginSuccess=()=>({
    type:"Success",
    payload:user,
})
export const LoginFailure=()=>({
    type:"Start",
    payload:error,
})