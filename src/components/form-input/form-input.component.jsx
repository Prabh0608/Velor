const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="relative my-2 group">
      <input 
        className="bg-white text-black text-[0.95rem] py-3.5 px-4 block w-full border-[1.5px] border-gray-200 rounded-md transition-all duration-200 font-inherit focus:outline-none focus:border-[#8B9A84] focus:shadow-[0_0_0_3px_rgba(139,154,132,0.15)] peer placeholder-transparent"
        placeholder={label}
        {...otherProps} 
      />
      {label && (
        <label 
          className={`absolute left-4 px-1 bg-white text-gray-500 font-medium transition-all duration-200 pointer-events-none 
          ${otherProps.value.length ? '-top-2 text-[0.7rem] font-semibold text-[#8B9A84]' : 'top-1/2 -translate-y-1/2 text-[0.85rem]'} 
          peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:font-semibold peer-focus:text-[#8B9A84]`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;