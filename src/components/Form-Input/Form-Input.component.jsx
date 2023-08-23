import './Form-Input.style.scss'

const FormInput = ({ label, ...otherpops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherpops} />
      {label && (
        <label className=
         {`${
            otherpops.value.length ? 'shrink' : ''
          } form-input-label`}
        >{label}
        </label>
      )}
    </div>
  )
}

export default FormInput 