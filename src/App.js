import styles from "./styles/Global";
import pictureJavi from "./assets/images/javi.png";
import Me from "./assets/svg/me";

export default function App() {
  return (
    <div className="flex justify-center">
      <Me fillColor={styles.black} />
      <img src={pictureJavi} alt="Not Found" />
      <h1 className={styles.title}>Hello world!</h1>
    </div>
  );
}
