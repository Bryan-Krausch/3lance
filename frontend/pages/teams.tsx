import type { NextPage } from 'next'
import TeamTable from '../components/team/TeamTable'


const Teams: NextPage = () => {
  return (
    <div className='font-ddin p-5' >
      <h2 className='text-orange-color text-2xl font-circular uppercase tracking-wider'>Team</h2>
      <div className='text-white pt-5'>
        <TeamTable />
      </div>
    </div>
  )
}

export default Teams
