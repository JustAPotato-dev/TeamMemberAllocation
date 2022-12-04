import TeamMembers from '../components/TeamMembers'
import Teams from '../components/Teams'

const Employees = () => {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <Teams />
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-8">
            <TeamMembers />
        </div>
      </div>
    </main>
  )
}
export default Employees
