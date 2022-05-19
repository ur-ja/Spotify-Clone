import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className>
        <Sidebar />
        {/* Centre */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export default Home
