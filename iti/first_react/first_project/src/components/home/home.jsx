import styles from "./home.module.css";
import { useState } from 'react';
import img from "../home/sss.jpg";


export default function Home() {

    let [counter, setCounter] = useState(0);

    function increase() {
        setCounter(counter + 1);   
        console.log(counter);
    }

        function mins() {
        setCounter(counter - 1);   
        console.log(counter);
    }

    
        function mul() {
        setCounter(counter * 2);   
        console.log(counter);
    }

            function div() {
        setCounter(counter / 2);   
        console.log(counter);
    }






    return (
        <>
            <h4 className=" text-center text-light bg-danger">
                Count: {counter}
            </h4>
 <button className="btn btn-info" onClick={increase} >Increase Counter</button>
  <button className="btn btn-info" onClick={mins} >decrease Counter</button>
    <button className="btn btn-info" onClick={mul} >mul 2 </button>
     <button className="btn btn-info" onClick={div} >div by 2 </button>




            <div className={`container ${styles.sso}`}>

                <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                </div>



                <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                </div>

                <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                </div>

            </div>





        </>
    );

}