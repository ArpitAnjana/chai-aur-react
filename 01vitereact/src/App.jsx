import Chai from "./chai"


function App() {

  const username = 'arpit';
  return (
    <> {/* this is fragment */}
      <Chai/>
      <h1>hello there this is h1</h1>
      <p>hii {username} this is p tag</p>
    </>//{username} this is a evaluated expression jo ki js ka final outcome hota he 
  )
}

export default App
