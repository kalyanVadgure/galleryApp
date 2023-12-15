import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateGalleryImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onSelectThumbnailImage = () => {
    updateGalleryImage(id)
  }

  const activeImageClassName = isActive ? '' : 'thumbnail_image'

  return (
    <li className="listImage">
      <button
        className="image_button"
        type="button"
        onClick={onSelectThumbnailImage}
      >
        <img
          className={activeImageClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onSelectThumbnailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
