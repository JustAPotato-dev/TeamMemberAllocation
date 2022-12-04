import { useContext } from 'react'
import type { Employee } from '../../typing'
import DataContext from '../context/DataContext'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = () => {
  const { employees } = useContext(DataContext)

  return (
    <div className="card-collection">
      {employees.map((employee: Employee) => (
        <TeamMemberCard key={employee.id} employee={employee} />
      ))}
    </div>
  )
}

export default TeamMembers
