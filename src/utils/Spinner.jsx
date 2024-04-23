
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import HashLoader from "react-spinners/HashLoader";
import ScaleLoader from "react-spinners/ScaleLoader";


const Spinner = () => {
const [loading, setLoading] = useState(true);

  return (
    <>
      <HashLoader
        size={23}
        color={"#ffefef"}
        loading={loading}
      />
    </>
  );
}

export default Spinner

