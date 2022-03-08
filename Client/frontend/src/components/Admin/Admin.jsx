
import { useEffect, useState } from "react";
//import axios from "axios";
import styles from "./Admin.module.css";
import { Link } from "react-router-dom";

export const Admin = ({next4 }) => {

    const[data , setData] = useState("");

    useEffect(() => {
        const fetchApi = async () => {

            const url = `http://localhost:2244/login`
            const res = await fetch(url);
            const resyes = await res.json();
      
            setData(resyes);
            console.log(data);
          };
          //console.log(city);
          fetchApi()
      },[data])
   

    return (
        <div className={styles.main}>
        
               
      <div className={styles.navbar}>
        <h1 className={styles.navbartitle}>Motion Education</h1>
        <div className={styles.addemployees}>
         <Link to ="/register"> <button className={styles.button}>Signup</button></Link>
         <Link to="/login"> <button className={styles.button}>Login</button></Link>
        </div>
        </div>
     
                   

                    <h1>Admin Page</h1>
                
            

        </div>
    );
};
