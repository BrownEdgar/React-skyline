// custom hooks
import { useRequest } from "./useRequest";
// styles
import styles from "./test.module.css";

export default function Test() {
  const { queryState } = useRequest();

  if (queryState.error) {
    return <div className={styles.container}>Error!</div>;
  }

  if (queryState.isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {queryState.data.map(({ title, id }) => (
        <span key={id} className={styles.item}>
          {title}
        </span>
      ))}
    </div>
  );
}
