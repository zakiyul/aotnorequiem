import styles from "./Content.module.css";

const Content = ({ title, children }) => {
  return (
    <div className="bg-black px-60 py-7  text-white flex justify-center">
      <div className="">
        <div className="flex justify-center mb-6">
          <hr className={styles.garis} />
          <h3 className="mx-4 text-5xl">{title}</h3>
          <hr className={styles.garis} />
        </div>
        <div className="px-14 text-lg leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default Content;
