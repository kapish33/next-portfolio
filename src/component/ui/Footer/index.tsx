import { serverImages } from '@/src/assets/server'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              href='https://advocatehunt.com/'
              className='flex items-center'
            >
              <Image
                height={50}
                width={50}
                src={serverImages.footer.logo}
                className='me-3 h-8'
                alt='Advocate Hunt Logo'
              />
              <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                Advocate Hunt
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                Resources
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link
                    href='https://flowbite.com/'
                    className='hover:underline'
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    News
                  </Link>
                </li>
                <li className='pt-4'>
                  <Link
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Judgements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                Follow us
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                Legal
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link href='#' className='hover:underline'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
            © 2024{' '}
            <Link href='https://flowbite.com/' className='hover:underline'>
              Advocate Hunt
            </Link>
            . All Rights Reserved.
          </span>
          <div className='mt-4 flex sm:mt-0 sm:justify-center'>
            <Link
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fillRule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </Link>

            <Link
              href='#'
              className='ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 17'
              >
                <path
                  fillRule='evenodd'
                  d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Twitter page</span>
            </Link>

            <Link
              href='#'
              className='ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <svg
                className='h-4 w-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2.163c1.658 0 1.868.006 2.525.037.656.03 1.093.138 1.352.23.335.116.575.258.832.515.257.257.399.497.515.832.092.259.2.696.23 1.352.031.657.037.867.037 2.525s-.006 1.868-.037 2.525c-.03.656-.138 1.093-.23 1.352-.116.335-.258.575-.515.832-.257.257-.497.399-.832.515-.259.092-.696.2-1.352.23-.657.031-.867.037-2.525.037s-1.868-.006-2.525-.037c-.656-.03-1.093-.138-1.352-.23-.335-.116-.575-.258-.832-.515-.257-.257-.399-.497-.515-.832-.092-.259-.2-.696-.23-1.352-.031-.657-.037-.867-.037-2.525s.006-1.868.037-2.525c.03-.656.138-1.093.23-1.352.116-.335.258-.575.515-.832.257-.257.497-.399.832-.515.259-.092.696-.2 1.352-.23.657-.031.867-.037 2.525-.037M12 0c-1.675 0-1.88.006-2.538.037-.66.03-1.12.14-1.515.3-.413.168-.762.388-1.113.739-.351.351-.571.7-.739 1.113-.16.395-.27.855-.3 1.515-.031.657-.037.862-.037 2.538s.006 1.88.037 2.538c.03.66.14 1.12.3 1.515.168.413.388.762.739 1.113.351.351.7.571 1.113.739.395.16.855.27 1.515.3.657.031.862.037 2.538.037s1.88-.006 2.538-.037c.66-.03 1.12-.14 1.515-.3.413-.168.762-.388 1.113-.739.351-.351.571-.7.739-1.113.16-.395.27-.855.3-1.515.031-.657.037-.862.037-2.538s-.006-1.88-.037-2.538c-.03-.66-.14-1.12-.3-1.515-.168-.413-.388-.762-.739-1.113-.351-.351-.7-.571-1.113-.739-.395-.16-.855-.27-1.515-.3C13.88.006 13.675 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.138a3.977 3.977 0 1 1 0-7.955 3.977 3.977 0 0 1 0 7.955Zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
