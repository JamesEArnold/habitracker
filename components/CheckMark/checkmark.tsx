import { useEffect, useState } from 'react';
import classNames from 'classnames';

enum STATES {
  DEFAULT,
  IN_PROGRESS,
  DONE,
}

// stroke: #4c4c4c;
// stroke-dasharray: 314;
// stroke-dashoffset: 1000;
// animation: spin 3s linear infinite;


// const conditionalCheckMarkClasses = (isChecked: boolean): string => classNames('w-8 h-8 stroke-[#63bc01] stroke-[6px] origin-[50px_50px] transition-all', {
//   'stroke-[#4c4c4c] ':
//       isChecked,
//   'text-sea-blue-300 hover:bg-sea-white-200 hover:text-sea-blue-900 dark:text-sea-white-400 dark:hover:bg-sea-blue-300 dark:hover:text-sea-white-100':
//       !isChecked,
// });

const conditionalCheckMarkClasses = (isChecked: boolean): string => classNames({
  'checkmark':
      isChecked,
});

const conditionalTickMarkClasses = (isChecked: STATES): string => classNames('tick-base', {
  'tick-progress':
      isChecked === STATES.IN_PROGRESS,
  'tick-done':
      isChecked === STATES.DONE,
});

export const CheckMarkIcon = () => {
  const [isChecked, setChecked] = useState(false);

  return (<><svg onClick={() => setChecked(!isChecked)} className={conditionalCheckMarkClasses(isChecked)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
</>)};
