function Button({
  title,
  className = "btn-primary",
  text = "click me",
  onClick = () => {},
  type,
}) {
  return (
    <button type={type} title={title} className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
