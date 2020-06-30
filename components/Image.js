export default function Image({ src, className, alt }) {
  return (
    <div className={className}>
      <img
        className="blurred absolute inset-0"
        src={require(`images/${src}?lqip`)}
        alt="placeholder"
      />
      <img src={require(`images/${src}?webp`)} alt={alt} />
      <style jsx>{`
        .blurred {
          blur(2rem);
        }
      `}</style>
    </div>
  )
}
