import { useContext } from 'react'
import DataContext from '../context/DataContext'
import type { Employee } from '../../typing'
import maleProfile from '../assets/images/maleProfile.jpg'
import femaleProfile from '../assets/images/femaleProfile.jpg'

interface Props {
  employee: Employee
}

const TeamMemberCard = ({ employee }: Props) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext)

  return (
    <div id={employee.id.toString()} onClick={handleEmployeeCardClick} style={{ cursor: 'pointer' }} className={employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'}>
      {employee.gender === 'male' ? <img src={maleProfile} className="card-img-top" alt="profile" /> : <img src={femaleProfile} className="card-img-top" alt="profile" />}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  )
}

export default TeamMemberCard
