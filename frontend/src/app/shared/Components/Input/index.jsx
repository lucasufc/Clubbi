import './Input.css'

export const Input = ({name,label, defaultValue,...rest }) =>{
    return (
      <div className="input-block">
          <label htmlFor={name}>{label}</label>
          <input type="text" id={name} {...rest} />
      </div>
    );
  }
  