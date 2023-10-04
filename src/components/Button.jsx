export default function Button({
  text,
  icon,
  iconStyle = "",
  isActive = false,
  handleSubmit,
}) {
  return (
    <button
      className={`flex gap-x-1.5 items-center px-5 py-2 border border-indigo-700 rounded-full font-bold text-sm hover:bg-indigo-700 hover:text-white ${
        isActive ? "bg-indigo-700 text-white" : "text-indigo-700"
      }`}
      onClick={handleSubmit ? handleSubmit : null}
    >
      {text}
      {icon && <span className={`text-xl ${iconStyle}`}>{icon}</span>}
    </button>
  );
}
