import { NextPage } from 'next';
import styles from '../styles/Checkbox.module.scss';
import { Prefacture } from '../types/Prefacture';

type Props = {
  prefacture: Prefacture;
  checked: boolean;
  onChange: Function;
};

const Checkbox: NextPage<Props> = ({ prefacture, checked, onChange }: Props) => {
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
};

export default Checkbox;
