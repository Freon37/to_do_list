import TaskList from '../TaskList/TaskList.jsx';
import ControlModule from '../ControlModule/ControlModule.jsx';
import styles from './App.module.css';
import todoLogo from "../../assets/logo.svg";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          <img src={todoLogo} alt="Logo todo" />
        </h1>
      </header>
      <main className={styles.main}>
        <section className={styles.list}>
          <ControlModule />
          <TaskList />
        </section>
      </main>
    </div>
  );
}