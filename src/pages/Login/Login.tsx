import { Link } from 'react-router-dom'
import { rules } from '../../utils/rules'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-3 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='password'
                />
                <div className='mt-1 first-line:text-red-600 min-h-[1rem] text-sm'></div>
              </div>

              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 text-center flex items-center gap-x-2 justify-center'>
                <span className='text-slate-400'>Bạn chưa có tài khoản hay chưa?</span>
                <Link to='/register' className='text-red-500'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
