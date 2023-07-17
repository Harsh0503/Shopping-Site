import './Form-Input.style.scss'

const FormInput = ({ label, ...otherpops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherpops} />
      {label && (
        <label className={`${otherpops.value.lenght ? 'shrink' : ''
          } form-input-label`}
        >{label}
        </label>
      )}
    </div>
  )
}

export default FormInput 