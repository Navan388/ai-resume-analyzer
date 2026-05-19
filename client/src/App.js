import { useState } from "react";
import UploadForm from "./components/UploadForm";
import Results from "./components/Results";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [data, setData] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  // 🔄 Toggle between Login & Register
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Resume Analyzer</h1>

      {!isLoggedIn ? (
        isLogin ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setIsLogin={setIsLogin}
          />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )
      ) : (
        <>
          <UploadForm setData={setData} />
          {data && <Results data={data} />}

          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
              setData(null);
            }}
            style={{ marginTop: "20px" }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;