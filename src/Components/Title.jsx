
export default function Title({ title }) {
  return (
    <div className='text-center my-5 text-uppercase fw-bolder'>
      <h1>{title}</h1>
      <div className='d-flex justify-content-center align-items-center gap-3'>
        <span className='fw-bolder fs-6'>________</span>
        <i className="fa-solid fa-star"></i>
        <span className='fw-bolder fs-6'>________</span>
      </div>
    </div>
  )
}
