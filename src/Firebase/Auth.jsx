import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, database, googleprovider } from "./Firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

const Auth = () => {
  const [list, setlist] = useState([]);

  //
  const [addmovie, setmovie] = useState("");
  const [addbudget, setbudget] = useState("");
  const [adddirector, setdirector] = useState("");

  const Handlegoogle = async () => {
    const result = await signInWithPopup(auth, googleprovider);
    console.log(result);
  };

  const moviellist = collection(database, "movies");
  const Movies = async () => {
    const data = await getDocs(moviellist);
    const values = data.docs.map((doc) => ({
      ...doc.data(),
    }));
    setlist(values);
  };

  useEffect(() => {
    Movies();
  }, []);



  const HandleSumbit=async()=>{
    await addDoc(moviellist,
      {  movies:addmovie,
        budget:addbudget,
        director:adddirector,}

    )
    Movies()
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={addmovie}
          onChange={(e) => setmovie(e.target.value)}
        />
        <input
          type="text"
          value={addbudget}
          onChange={(e) => setbudget(e.target.value)}
        />
        <input
          type="text"
          value={adddirector}
          onChange={(e) => setdirector(e.target.value)}
        />
        <button onClick={HandleSumbit}>Add the data</button>
      </form>

      <button onClick={Handlegoogle}>SignwithGoogle</button>
      {list.map((moviessss) => {
        return (
          <div>
            <h3>
              {moviessss.movies} {moviessss.budget} {moviessss.director}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Auth;
