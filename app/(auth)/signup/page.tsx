/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2024-06-06 18:37:22
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-06-10 00:14:35
 * @FilePath: /FuelCN/app/(auth)/signup/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make entrepreneurism easier.</h1>
          </div> */}

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Already using Simple? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
