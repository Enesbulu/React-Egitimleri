
export const users = [
    {
        usernama: "Enes",
        password: "123456"
    },
    {
        usernama: "İbrahim",
        password: "456789"
    }
]



function Login() {

    return (
        // Fragment
        /*
            <>
            </>
         */
        <>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>
            <button style={{ backgroundColor: "blue" }}>Giriş Yap</button>
        </>
    )
}

export default Login
