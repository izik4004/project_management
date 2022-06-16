import {useState} from "react"
import "./signup.css"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("")
  const [thumbnail, setThumbnail] = useState=(null)
  return (
    <div>
        <form className="auth-form">
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
              type="file" 
                required
              />
            </label>
            <button className="btn">Sign Up</button>
        </form>
    </div>
  )
}
