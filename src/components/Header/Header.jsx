import styles from "./Header.module.css";
import todoLogo from "../../assets/logo.svg";

/* eslint-disable react/prop-types */
export default function Header() {
    return (
        <header className={styles.header}>
            <h1>
                <img src={todoLogo} alt="Logo" />
            </h1>
        </header>
    )
}