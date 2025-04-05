import LoginImage from "./assets/login.svg"

function App() {
  return (
    <main className="w-full h-screen flex">
      {/* Esquerda */}
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-full flex flex-col justify-center items-center">
        <img src={LoginImage} alt="Imagem ilustrativa de login" className=" w-[450px]" />
        <h1>Secure Login Portal.</h1>
        <p>Acess your dashboard securely with our protected login system. Your data is encrypted and secure.</p>
      </div>
      {/* Direita */}
      <div className="bg-blue-300 w-1/2 h-full"></div>
    </main>    
  )
}

export default App
