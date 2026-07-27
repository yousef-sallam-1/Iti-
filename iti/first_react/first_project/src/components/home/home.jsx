import styles from "./home.module.css";
import { useState } from 'react';
import img from "../home/sss.jpg";


export default function Home() {

    let [counter, setCounter] = useState(5);

    function increase() {
        setCounter(counter + 1);   
    }

    return (
        <>
            <h4 className="bg-primary text-center text-light">
                Count: {counter}
            </h4>

            <button
                className="btn btn-info"
                onClick={increase}
            >
                Increase Counter
            </button>




            <div className={`sso ${styles.sso}`}>

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