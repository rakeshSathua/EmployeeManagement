import React from 'react'

const Home = () => {
  return (
    <>
      <div>
        <div className='p-3 d-flex justify-content-around'>
          <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
              <h5>Admin</h5>
            </div>
            <hr/>
            <div className=''>
              <h4>
                Total : {}
              </h4>
            </div>
          </div>

          <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
              <h5>Employee</h5>
            </div>
            <hr/>
            <div className=''>
              <h4>
                Total : {}
              </h4>
            </div>
          </div>

          <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
              <h5>Salary</h5>
            </div>

            <hr/>

            <div className=''>
              <h4>
                Total : {}
              </h4>
            </div>

          </div>
        </div>
        <div className='mt-5 px-5 pt-3 '>
          <h3>List Of Admins</h3>
          <table className='table'>
            <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          
        </div>
      </div>

    </>
  )
}

export default Home;