export default function Image({ src, className, alt }) {
  return (
    <img
      src={require(`images/${src}?webp`)}
      alt={alt}
      className={className}
      loading="lazy"
    />
  )
}
