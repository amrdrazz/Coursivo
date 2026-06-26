

function Certificates() {
    const certificate = {
        title: 'React Complete course',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6YHBXrjdP_vnMX15ncXntXwPlWWEEXikKn0m_aVN8A&s=10'
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
