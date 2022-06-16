import {useState} from "react"
import "./signup.css"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("")
  const [thumbnail, setThumbnail] = useState=(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    if(!selected) {
        setThumbnailError("Please select a file")
        return
    }
    if(!selected.type.includes('image')) {
      setThumbnailError("Selected File must be an Image")
      return
    }
    if(selected.size > 100000) {
      setThumbnailError("Image filesize must be less than 100kb")
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
  }
  
  
  return (
    <div>
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label >
              <span>Email:</span>
              <input 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" 
                required
              />
            </label>
            <label >
              <span>Password:</span>
              <input 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" 
                required
              />
            </label>
            <label >
              <span>Display Name:</span>
              <input 
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              type="text" 
                required
              />
            </label>
            <label >
              <span>Profile Picture:</span>
              <input 
              onChange={handleFileChange}
              type="file" 
                required
              />
              {thumbnailError && <div className="error">{thumbnailError}</div>}
            </label>
            <button className="btn">Sign Up</button>
        </form>
    </div>
  )
}
