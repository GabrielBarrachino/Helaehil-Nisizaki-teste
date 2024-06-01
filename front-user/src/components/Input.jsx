import PropTypes from 'prop-types'

const Input = ({ id, label, placeholder, type, value, onChange, ...rest }) => {
    return(
        <>
            <div className='flex flex-col gap-1 w-full'>
                {label && <label className='text-brand-primary-500 font-inter text-sm' htmlFor='{id}'>{label}</label>}
                <input 
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    {...rest}
                    className='outline-none border-solid border-2 border-brand-primary-300 rounded-md p-2.5 placeholder:text-sm'
                />
            </div>
        </>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    value: '',
};

export default Input