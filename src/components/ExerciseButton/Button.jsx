export default function Button({ mode = "filled", children, Icon, ...props }) {
  return (
    <button
      className={`button ${
        mode === "filled"
          ? "filled-button"
          : mode === "outline"
          ? "outline-button"
          : mode === "text"
          ? "text-button"
          : ""
      } ${Icon ? "icon-button" : ""}`}
      {...props}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}
