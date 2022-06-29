import dayjs, { Dayjs } from 'dayjs'
import type { NextPage } from 'next'
import Image from 'next/image';
import runningIcon from '@/public/jogging.png';
import { CheckMarkIcon } from '@/components/CheckMark/checkmark';
import { useState } from 'react';
import classNames from 'classnames';


const Home: NextPage = () => {
  const conditionalSelectedDayClasses = (day: dayjs.Dayjs): string => classNames('text-center m-3', {
    'text-4xl':
        day.get('date') === selectedDay.get('date'),
    'text-2xl leading-10 text-sea-blue-200':
        day.get('date') !== selectedDay.get('date'),
  });
  const today: Dayjs = dayjs();
  const [selectedDay, setSelectedDay] = useState(today);

  return (
    <div className="bg-sea-white-100">
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <span className="text-3xl font-semibold text-center text-sea-blue-900 mt-6">{selectedDay.get('date') === today.get('date') ? 'Today' : selectedDay.format('dddd')}</span>
        <div className="flex justify-center">
          <span className={conditionalSelectedDayClasses(today.subtract(2, 'day'))} onClick={() => setSelectedDay(today.subtract(2, 'day'))}>{today.subtract(2, 'day').get('date')}</span>
          <span className={conditionalSelectedDayClasses(today.subtract(1, 'day'))} onClick={() => setSelectedDay(today.subtract(1, 'day'))}>{today.subtract(1, 'day').get('date')}</span>
          <span className={conditionalSelectedDayClasses(today)} onClick={() => setSelectedDay(today)}>{today.get('date')}</span>
          <span className={conditionalSelectedDayClasses(today.add(1, 'day'))} onClick={() => setSelectedDay(today.add(1, 'day'))}>{today.add(1, 'day').get('date')}</span>
          <span className={conditionalSelectedDayClasses(today.add(2, 'day'))} onClick={() => setSelectedDay(today.add(2, 'day'))}>{today.add(2, 'day').get('date')}</span>
        </div>
        <span className="text-center">{today.format('MMMM')}</span>
        <div className="relative flex items-center justify-between m-3 p-3 rounded-md bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
          <div className="flex justify-center bg-transparent">
            <div className="h-auto w-auto">
                <Image src={runningIcon} alt="logo" height="64px" width="64px" />
            </div>
            <span className="h-full self-center ml-6 text-3xl text-sea-white-100 habit-title">Running</span>
          </div>
          <div className="justify-center">
            <div className="h-10 w-10">
              <CheckMarkIcon />
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center m-3 p-3 rounded-md bg-white drop-shadow-lg opacity-50">
            <span className="">+</span>
        </div>
      </div>
    </div>
  )
}

export default Home
