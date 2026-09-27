import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSerach'
import './styles.css'

function App() {
  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        <section className="card users-container">
          <UserSearch />

          <UserList />

        <Pagination />
        </section>

        {/* <!-- User details component  --> */}

        {/* <!-- Create/Edit Form component  --> */}

        {/* <!-- Delete user component  --> */}

      </main>
      < Footer />
    </>

  )
}

export default App
