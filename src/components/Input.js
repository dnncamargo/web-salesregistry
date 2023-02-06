const Input = ({placeholder, maxlen, value, req}) => {

    return ( <div>
        <input className='form-control'
            type="text"
            placeholder={placeholder}
            maxLength={maxlen}
            required={req}

            /** O valor do campo também é enviado por props*/
            defaultValue={value}>
        </input>
    </div> );
}
 
export default Input;