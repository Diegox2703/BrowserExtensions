import { Header, Main } from '@/components/layout'

export default function App() {
  return (
    <div className='px-3 md:px-12 lg:px-20 flex flex-col gap-10 max-w-[1440px] m-auto'>
      <Header/>
      <Main/>
    </div>
  )
}