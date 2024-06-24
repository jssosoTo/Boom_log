import styles from "./index.module.css";

function PersonalPhoto({
  name,
  size,
  isCircle = false,
}: {
  name: string;
  size?: string;
  isCircle?: boolean;
}) {
  const fontSize = size || "1rem";

  return (
    <div
      className={styles.Photo}
      style={{
        fontSize,
        width: `calc(${fontSize} * 2.5)`,
        borderRadius: isCircle ? "50%" : "0%",
      }}
    >
      {name[0]}
    </div>
  );
}

export default PersonalPhoto;
