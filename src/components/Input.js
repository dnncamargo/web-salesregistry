const Input = ({label, type, maxlen, value, req}) => {

    return ( <div>
        <label> {label} </label>
        <input className='form-control'
            type={type} 
            maxLength={maxlen}
            required={req}

            /** O valor do campo também é enviado por props*/
            value={value}>
        </input>
    </div> );
}
 
export default Input;