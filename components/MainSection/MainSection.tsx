import React from 'react'
import AreaChart from './Charts/AreaChart'
import Progress from './Progress/Progress'
import SearchInput from './SearchInput/SearchInput'
import TeamMember from './TeamMember/TeamMember'
import TodayTask from './TodayTask/TodayTask'

function MainSection() {
  return (
    <div className='bg-main-section'>
        <div className='container px-3 py-2'>
            <div className='flex flex-col gap-10'>
                <SearchInput />
                <TodayTask />
                <Progress />
                <div className='flex gap-2'>
                  <div>
                    <AreaChart />
                  </div>
                  <div>
                      <TeamMember />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection