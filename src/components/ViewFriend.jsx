import React from 'react'
import Navbar from './Navbar'

const ViewFriend = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend's Name</th>
      <th scope="col">Nick Name</th>
      <th scope="col">Describe your friend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sandra</th>
      <td>Suhan</td>
      <td>Suhu</td>
      <td>Very Pretty</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriend