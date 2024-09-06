import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Pojects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
      <div className='p-6 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='p-6 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='p-6 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
    </div>
  )
}