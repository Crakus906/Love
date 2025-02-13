import Image from "next/image";
import styles from "./page.module.css";
import Valentinks from "./valentinks";
import ValentinksCopy from "./valentinksCopy";

export default function Home() {

  return (
    <div className={styles.block}>
      <div className={styles.text2}>Від Андрія для Танюши<div className={styles.heart1}></div></div>

      <Valentinks />
      {/* <ValentinksCopy /> */}

    </div >

  );
}
