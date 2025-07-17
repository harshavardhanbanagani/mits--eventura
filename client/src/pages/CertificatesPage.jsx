import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCertificates } from '../features/certificates/certificatesSlice'

function CertificatesPage() {
  const dispatch = useDispatch()
  const { certificates, loading, error } = useSelector((state) => state.certificates)

  useEffect(() => {
    dispatch(fetchCertificates())
  }, [dispatch])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Certificates</h1>
      {loading && <p>Loading certificates...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <ul className="list-disc pl-5 space-y-2">
          {certificates.length === 0 && <li>No certificates yet.</li>}
          {certificates.map((cert, i) => (
            <li key={i}>{JSON.stringify(cert)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CertificatesPage