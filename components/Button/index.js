export default function Button ({
  children,
  handleClick,
  backgroundColor = '#fff',
  color = '#000',
  fontSize = '1.6rem'
}) {
  return (
    <>
      <button onClick={handleClick}>
        {children}
      </button>
    </>
  )
}
