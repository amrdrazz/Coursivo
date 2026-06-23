

function Certificates() {
    const certificate = {
        title: 'React Complete course',
        thumbnail: '../../../src/imgs/react-thumbnail.png'
    }
  return (
    <div className="certificates">
        <h1>Recent Certificates</h1>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="certificate_card">
            <div className="image">
                <img src={certificate.thumbnail} alt="" />
            </div>
            <div className="title">
                <h3>{certificate.title}</h3>
            </div>
            <div className="button">
                <button>Download</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Certificates
