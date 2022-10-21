export default function Checkbox({ prefacture, checked, onChange }) {
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={() => onChange(prefacture.prefCode)} />
      <span>{prefacture.prefName}</span>
    </label>
  );
}
