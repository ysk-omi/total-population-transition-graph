import styles from '../styles/Checkbox.module.scss';

export default function Checkbox({ prefacture, checked, onChange }) {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type='checkbox'
        checked={checked}
        onChange={() => onChange(prefacture.prefCode)}
      />
      <span className={styles.text}>{prefacture.prefName}</span>
    </label>
  );
}
