function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-600 hover:border-blue-500 hover:text-blue-500 text-white"
  }

  return (
    <button
      className={`
        px-7 py-3 rounded-2xl
        transition duration-300
        font-medium
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button